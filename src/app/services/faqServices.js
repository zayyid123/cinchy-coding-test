import { axiosInstance } from "../config/fetchAxios";

export const GetAllDataFaq = async () => {
    const response = axiosInstance.get(`/faq`);
    return response;
};