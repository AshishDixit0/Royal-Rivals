import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
    baseURL: "https://4c85-2401-4900-560a-adbe-bd80-5a31-1490-2662.ngrok-free.app",
    timeout: 10000,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
});

export const setToken = async (token: string) => {
    console.log('this is the tooken: ', token);
    
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await AsyncStorage.setItem('token', token);
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
