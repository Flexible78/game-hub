import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "c5ee0c99a2f44bc2813d961b44538bc4"
    }
});
export default apiClient;
