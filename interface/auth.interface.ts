export interface AuthState {
  isAuthenticated: boolean | null;
  user: any | null;
  token: string | null;
}
