import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';

export const httpRequest = (
  method = 'get',
  endpoint = '',
  data = {},
  token
) => {
  const config = {
    method,
    url: `${baseURL}${endpoint}`,
    data
  };

  if (token) config.headers = { token };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};
