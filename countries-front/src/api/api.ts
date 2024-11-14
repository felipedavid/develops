import axios, { AxiosInstance } from 'axios';

const axiosParams = {
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
}

const axiosInstance = axios.create(axiosParams);

function api(axios: AxiosInstance) {
    return {
        get: (url: string, config = {}) => axios.get(url, config),
        delete: (url: string, config = {}) => axios.delete(url, config),
        head: (url: string, config = {}) => axios.head(url, config),
        options: (url: string, config = {}) => axios.options(url, config),
        post: (url: string, data = {}, config = {}) => axios.post(url, data, config),
        put: (url: string, data = {}, config = {}) => axios.put(url, data, config),
        patch: (url: string, data = {}, config = {}) => axios.patch(url, data, config),
    };
}

export default api(axiosInstance);