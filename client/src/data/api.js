import axios from 'axios';
import { browserHistory } from 'react-router'

import config from '../config';

const baseUrl = config.baseUrl;

const onErrorHandler = error => {
  if (error.response) {
    if (error.response.status === 401) {
      browserHistory.push('/logout');
    }
  }
};

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
    return axios.get(`${baseUrl}${path}`, getConfig())
      .catch(onErrorHandler);
  },

  post: (path, payload) => {
    return axios.post(`${baseUrl}${path}`, payload, getConfig())
      .catch(onErrorHandler);
  },

  getToken: getToken,

  setToken: (token) => {
    localStorage.setItem('jwt', token);
  },

  destroyToken: () => {
    localStorage.removeItem('jwt');
  }
}