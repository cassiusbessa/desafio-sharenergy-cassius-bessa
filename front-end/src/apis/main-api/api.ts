import axios, { AxiosRequestConfig } from "axios";
import { clearSessionToken, clearToken, getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();
  const newConfig = {
    headers: {
      Authorization: token,
    },
    ...config,
  };
  return newConfig;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      clearToken();
      clearSessionToken();
    }
    return Promise.reject(error);
  }
);

export default api;