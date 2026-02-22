import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "7f7d4bdcf46e46539597864da68574a1"
    }
});
export default apiClient;
