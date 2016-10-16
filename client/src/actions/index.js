import api from '../data/api';


export function loadSession() {
  return dispatch => {
    dispatch({
      type: api.getToken() ? 'CREATE_SESSION_SUCCESS' : 'DESTROY_SESSION_SUCCESS'
    });
  };
}

export function createSession(credentials) {
  return dispatch => {
    return api.post('/sessions/', credentials)
      .then(function (response) {
        api.setToken(response.data.token);

        dispatch({
          type: 'CREATE_SESSION_SUCCESS'
        });

        return response.data;
      });
  };
}

export function destroySession() {
  return dispatch => {
    api.destroyToken(null);

    dispatch({
      type: 'DESTROY_SESSION_SUCCESS'
    });
  };
}

export function loadProjects() {
  return dispatch => {
    return api.get('/projects/')
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
    return api.get(`/projects/${id}/`)
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
    return api.post('/projects/', payload)
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
    api.get(`/projects/${projectId}/features/`)
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
    return api.get(`/features/${featureId}`)
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
