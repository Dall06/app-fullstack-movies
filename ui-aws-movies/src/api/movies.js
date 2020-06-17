import axios from 'axios';

const baseUrl =
  'url';

export default (method, path, data, params = {}, headers = {}) =>
  axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    params,
    headers,
  });
