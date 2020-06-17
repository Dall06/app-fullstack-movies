import axios from 'axios';

const baseUrl =
  'https://ahpjnvuo2f.execute-api.us-east-1.amazonaws.com/prod/api/v2/users';

export default (method, path, data, params = {}, headers = {}) =>
  axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    params,
    headers,
  });
