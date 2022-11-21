//单独封装axios
import axios from "axios";
import { Message } from "element-ui";
// import { getToken } from "./auth";

const service = axios.create({
  baseURL: "localhost:8080",
  timeout: 5000,
});

// //后台查询数据需要加token（名字后端定的）字段，加在请求头(headers)里，或者data里
// // 添加请求拦截器
// service.interceptors.request.use(
//   function(config) {
//     // 在发送请求之前做些什么
//     config.headers.token = getToken();
//     console.log(config);
//     return config;
//   },
//   function(error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (!res.success) {
      Message({
        type: "error",
        message: res.message || "请求错误",
      });
      return Promise.reject(new Error(res.message || "请求错误"));
    } else {
      return res;
    }
  },
  function(error) {
    Message({
      type: error,
      message: error.message || "请求错误",
    });
    return Promise.reject(error);
  }
);

export default service;
