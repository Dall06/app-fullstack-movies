import axios from 'axios';

const baseUrl =
  'https://zkamwi1cl9.execute-api.us-east-1.amazonaws.com/prod/api/v2/movies';

export default (method, path, data, params = {}, headers = {}) =>
  axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    params,
    headers,
  });
