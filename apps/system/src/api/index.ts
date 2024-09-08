import axios from "axios";

import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { ResponseType } from "./interface";

// basic config
const config = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  withCredentials: false
};

console.log(config);

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    // axios instance
    this.service = axios.create(config);

    // request interceptor
    this.service.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // response interceptor
    this.service.interceptors.response.use(
      response => {
        const { data } = response;
        return data;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  // get
  get<T>(url: string, params?: Recordable, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.get(url, { params, ...config });
  }

  // post
  post<T>(url: string, params?: Recordable, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.post(url, { params, ...config });
  }
}

export default new RequestHttp(config);
