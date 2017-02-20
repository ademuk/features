import axios from 'axios';
import { browserHistory } from 'react-router'

import config from '../config';

const baseUrl = config.baseUrl;

const getToken = () => {
  return localStorage.getItem('jwt');
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

  setToken: (token) => {
    localStorage.setItem('jwt', token);
  },

  destroyToken: () => {
    localStorage.removeItem('jwt');
  }
}