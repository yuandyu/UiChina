import { api } from './index'
import request from '../utils/request';
/**
 * 配送地址列表
 * WxOpenId
 * */
export function GetFind() {
  return request({
    url: api + `find`,
    method: 'GET',
  });
}
