import { io, Socket } from 'socket.io-client';

class SocketSingleton {
  private static instance: SocketSingleton;
  private socket!: Socket;
  private connected: boolean = false;

  private constructor(url: string) {
    if (!SocketSingleton.instance) {
      this.socket = io(url);
      SocketSingleton.instance = this;
      this.connected = true;
    } else {
      return SocketSingleton.instance;
    }
  }

  static getInstance(url: string): SocketSingleton {
    if (!SocketSingleton.instance) {
      SocketSingleton.instance = new SocketSingleton(url);
    }
    return SocketSingleton.instance;
  }

  connect(): void {
    if (!this.connected) {
      this.socket.connect();
      this.connected = true;
    }
  }

  disconnect(): void {
    if (this.connected) {
      this.socket.disconnect();
      this.connected = false;
    }
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  on(event: string, callback: (...args: any[]) => void): void {
    this.socket.on(event, callback);
  }

  off(event: string, callback?: (...args: any[]) => void): void {
    this.socket.off(event, callback);
  }
}

export default SocketSingleton;
