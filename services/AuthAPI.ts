import axios from "axios";

export const generateOtp = (data: any) => {
    return axios.post("https://4c85-2401-4900-560a-adbe-bd80-5a31-1490-2662.ngrok-free.app/otp", data);
}

export const login = (data: any) => {
    return axios.post("https://4c85-2401-4900-560a-adbe-bd80-5a31-1490-2662.ngrok-free.app/login", data);
}
