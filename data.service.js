/* eslint-disable import/no-named-as-default-member */
import http from './http';
import config from '../../config.json';
import trimSlash from '../utils/trim-slash';

const apiUrl = trimSlash(config.apiUrl);

export function get(url, query) {
  const urlPath = trimSlash(url);
  return http.get(`${apiUrl}/${urlPath}`, { query }).then(response => response.body);
}
export function post(url, payload, query) {
  const urlPath = trimSlash(url);
  return http.post(`${apiUrl}/${urlPath}`, payload, { query }).then(response => response.body);
}
export function put(url, payload, query) {
  const urlPath = trimSlash(url);
  return http.put(`${apiUrl}/${urlPath}`, payload, { query }).then(response => response.body);
}
export function del(url, payload) {
  const urlPath = trimSlash(url);
  return http.del(`${apiUrl}/${urlPath}`, payload).then(response => response.body);
}

export default { get, post, put, del };