import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://easybooks.me/codechallenge",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const get = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.get(url, config).then((res) => res.data);
};

const post = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.post(url, data, config).then((res) => res.data);
};

const put = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.put(url, data, config).then((res) => res.data);
};

const remove = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.delete(url, config);
};

const API = {
  get,
  post,
  put,
  remove,
};

export default API;
