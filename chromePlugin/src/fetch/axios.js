import axios from "axios";
export const fetch = (props = {}) => {
  const axiosBase = axios.create({
    // lilin: baseURL写成后端接口的域名
    // baseURL: '',
    timeout: 7000, // 请求超时时间
    withCredentials: true,
  });
  // request拦截器
  axiosBase.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response 拦截器
  axiosBase.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosBase(props);
};
