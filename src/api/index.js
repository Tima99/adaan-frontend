import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: "http://localhost:8000/api",
});

export const authApi = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
});

export default api;
