import axios from "axios";
export const fetch = (props = {}) => {
  const axiosBase = axios.create({
    // lilin: baseURL写成后端接口的域名
    baseURL: 'https://staging-crm-api.atkinsinsights.com/v1',
    timeout: 7000, // 请求超时时间
    withCredentials: true,
  });
  // request拦截器
  axiosBase.interceptors.request.use(
    (config) => {
      if (config.params && config.params.token) {
        // 将token值添加到请求头中
        config.headers.Authorization = config.params.token
        // 移除params中的token以避免重复传递
        delete config.params.token;
      }
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
