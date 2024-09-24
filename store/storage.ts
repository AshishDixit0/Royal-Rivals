import AsyncStorage from '@react-native-async-storage/async-storage';

const reduxStorage = {
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("AsyncStorage Error: ", error);
    }
  },
  getItem: async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.error("AsyncStorage Error: ", error);
      return null;
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("AsyncStorage Error: ", error);
    }
  },
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All AsyncStorage data has been cleared');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

export default reduxStorage;