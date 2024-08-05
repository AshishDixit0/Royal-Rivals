import API from "./API";
import { UnauthenticatedAPI } from "./API";
import { authToken } from "./API";

export const generateOtp = (data: any) => {
    return UnauthenticatedAPI.post(`/otp`, data);
}

export const loginAPI = (data: any) => {
    return UnauthenticatedAPI.post(`/login`, data);
}

export const signupAPI = (data: any) => {
    return UnauthenticatedAPI.post('/signup', data);
}

export const logoutAPI = () => {
    return API.post(`/logout`);
}