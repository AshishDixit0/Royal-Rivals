import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from "@/config";

export let authToken = '';

export const UnauthenticatedAPI = axios.create({
    baseURL: BACKEND_URL,
    timeout: 10000,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
});

export const API = axios.create({
    baseURL: `${BACKEND_URL}`,
    timeout: 10000,
    headers: {
      common: {
        'Content-Type': 'application/json',
      }
    }
});

export const setToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        authToken = token;
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log('Token set in headers: ', token);
    } else {
        console.error('No token found in AsyncStorage');
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            authToken = token;
            API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return token;
    } catch (error) {
        console.error('Error getting token from AsyncStorage:', error);
        return '';
    }
}

// Ensure the token is loaded when the app starts
(async () => {
    await getToken();
})();

export default API;
