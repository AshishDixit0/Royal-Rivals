import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from "@/config";

export let authToken: string;

const API = axios.create({
    baseURL: BACKEND_URL,
    timeout: 10000,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
});

export const setToken = async (token: string) => {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    authToken = token;
    await AsyncStorage.setItem('token', token);
}

export const getToken = () => {
    return AsyncStorage.getItem('token')
        .then(token => {
            if (token) {
                API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            return token;
        })
        .catch(error => {
            console.error('Error getting token from AsyncStorage:', error);
            return null;  
        });
}

API.interceptors.request.use(function (request) {
    return request;
}, function (error: any) {
    return Promise.reject(error);
});

API.interceptors.response.use(function (response) {
    return response;
}, function (error: any) {
    console.log('something went wrong: ', error);
    return Promise.reject(error);
});

export default API;
