import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

const getToken = function () {
  return localStorage.getItem('jwt');
};

const setToken = function (token) {
  localStorage.setItem('jwt', token);
};

const destroyToken = function () {
  localStorage.removeItem('jwt');
};

const getConfig = function () {
  const token = getToken();
  return token ? {
    headers: {
      Authorization: `JWT ${token}`
    }
  } : {};
};

export function loadSession() {
  return dispatch => {
    dispatch({
      type: getToken() ? 'CREATE_SESSION_SUCCESS' : 'DESTROY_SESSION_SUCCESS'
    });
  };
}

export function createSession(credentials) {
  return dispatch => {
    return axios.post(`${baseUrl}/sessions/`, credentials)
      .then(function (response) {
        setToken(response.data.token);

        dispatch({
          type: 'CREATE_SESSION_SUCCESS'
        });

        return response.data;
      });
  };
}

export function destroySession() {
  return dispatch => {
    destroyToken(null);

    dispatch({
      type: 'DESTROY_SESSION_SUCCESS'
    });
  };
}

export function loadProjects() {
  return dispatch => {
    return axios.get(`${baseUrl}/projects/`, getConfig())
      .then(function (response) {
        dispatch({
          type: 'LOAD_PROJECTS_SUCCESS',
          projects: response.data
        });

        return response.data;
      });
  };
}

export function loadProject(id) {
  return dispatch => {
    return axios.get(`${baseUrl}/projects/${id}/`, getConfig())
      .then(function (response) {
        dispatch({
          type: 'LOAD_PROJECT_SUCCESS',
          project: response.data
        });

        return response.data;
      });
  };
}

export function createProject(project) {
  return dispatch => {
    const payload = {
      ...project,
      repo_url: project.repoUrl
    };
    return axios.post(`${baseUrl}/projects/`, payload, getConfig())
      .then(response => {
        dispatch({
          type: 'CREATE_PROJECT_SUCCESS',
          project: response.data
        });

        return response.data;
      })
  };
}

export function updateProjectStatus(projectId, status) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_PROJECT_STATUS',
      projectId,
      status
    })
  }
}

export function loadFeatures(projectId) {
  return dispatch => {
    axios.get(`${baseUrl}/projects/${projectId}/features/`, getConfig())
      .then(function (response) {
        dispatch({
          type: 'LOAD_FEATURES_SUCCESS',
          projectId,
          features: response.data
        });

        return response.data;
      });
  };
}

export function loadFeature(projectId, featureId) {
  return dispatch => {
    return axios.get(`${baseUrl}/features/${featureId}`, getConfig())
      .then(function (response) {
        dispatch({
          type: 'LOAD_FEATURE_SUCCESS',
          projectId,
          feature: response.data
        });

        return response.data;
      });
  };
}
