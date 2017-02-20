import axios from 'axios';
import jwtDecode from 'jwt-decode';

import config from '../config';

const baseUrl = config.baseUrl;

const getToken = () => {
  return localStorage.getItem('jwt');
};

const getTokenPayload = () => {
  const token = getToken();

  if (token) {
    return jwtDecode(token);
  }
};

const getConfig = function () {
  const token = getToken();
  return token ? {
    headers: {
      Authorization: `JWT ${token}`
    }
  } : {};
};

export default {
  get: (path) => {
    return axios.get(`${baseUrl}${path}`, getConfig());
  },

  post: (path, payload) => {
    return axios.post(`${baseUrl}${path}`, payload, getConfig());
  },

  getToken: getToken,

  getTokenPayload: getTokenPayload,

  setToken: (token) => {
    localStorage.setItem('jwt', token);
  },

  destroyToken: () => {
    localStorage.removeItem('jwt');
  }
}