/* eslint-disable no-console */
import axios from 'axios';
import { Toast } from 'vant';
// const _ = require('lodash');
const service = axios.create({
  timeout: 5000,
  withCredentials: true
});

// request interceptor
service.interceptors.request.use(config => {
  console.log(config, 'config')
  if (config.method === 'get') { // 给get请求添加时间戳
    if (config.url.indexOf('?') > 0) {
      config.url = config.url + '&_t=' + Date.now();
    } else {
      config.url = config.url + '?_t=' + Date.now();
    }
  }
  config.headers['Content-Type'] = 'application/json-patch+json';
  config.headers['accept'] = 'application/json';
  config.headers['Access-Control-Allow-Credentials'] = true;
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

service.interceptors.response.use(response => {
  console.log(response)
  return response.data;
}, error => {
  console.log(error)
  Toast.clear();
  return Promise.reject(error);
});
export default service;
