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
  if (config.method === 'get') { // 给get请求添加时间戳
    if (config.url.indexOf('?') > 0) {
      config.url = config.url + '&_t=' + Date.now();
    } else {
      config.url = config.url + '?_t=' + Date.now();
    }
  }
  config.headers['Content-Type'] = 'application/json-patch+json';
  config.headers['accept'] = 'application/json';
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

service.interceptors.response.use(response => {
  return response.data;
}, error => {
  Toast.clear();
  if(error.response.status === 429) {
    Toast('操作过于频繁,请稍后再试!');
  }
  return Promise.reject(error);
});
export default service;
