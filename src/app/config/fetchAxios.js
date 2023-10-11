import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://cinchy-coding-test-api.onrender.com/api",
});

axiosInstance.interceptors.request.use((config) => {
    return config;
});