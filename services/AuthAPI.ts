import axios from "axios";
import { BACKEND_URL } from "@/config";

export const generateOtp = (data: any) => {
    console.log('this is the url: ', BACKEND_URL);
    
    return axios.post(`${BACKEND_URL}/otp`, data);
}

export const login = (data: any) => {
    return axios.post(`${BACKEND_URL}/login`, data);
}
