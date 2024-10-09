import { fetch } from './axios';
export const getInfo = (params) => {
  return fetch({
    url: '/api/xxx',
    method: 'GET',
    params
  })
}