import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

export function loadProjects() {
  return (dispatch) => {
    axios.get(`${baseUrl}/projects/`)
      .then(function (response) {
        dispatch({
          type: 'LOAD_PROJECTS',
          projects: response
        });
      });
  };
}

export function loadProject(id) {
  return (dispatch) => {
    axios.get(`${baseUrl}/projects/${id}/`)
      .then(function (response) {
        dispatch({
          type: 'LOAD_PROJECT',
          project: response
        });
      });
  };
}

export function createProject(name) {
  return (dispatch) => {
    // HTTP POST here
    setTimeout(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        name: name
      });
    }, 500);
  };
}

export function loadFeatures(projectId) {
  return (dispatch) => {
    axios.get(`${baseUrl}/projects/${projectId}/features/`)
      .then(function (response) {
        dispatch({
          type: 'LOAD_FEATURES',
          projectId,
          features: response
        });
      });
  };
}

export function loadFeature(projectId, featureId) {
  return (dispatch) => {
    axios.get(`${baseUrl}/features/${featureId}`)
      .then(function (response) {
        dispatch({
          type: 'LOAD_FEATURES',
          projectId,
          feature: response
        });
      });
  };
}

export function createFeature(projectId, name) {
  return (dispatch) => {
    // HTTP POST here
    setTimeout(() => {
      dispatch({
        type: 'CREATE_FEATURE',
        name: name,
        projectId
      });
    }, 500);
  };
}

export function saveFeature(projectId, featureId, text) {
  return (dispatch) => {
    // HTTP PUT here
    setTimeout(() => {
      dispatch({
        type: 'SAVE_FEATURE',
        name: name,
        projectId,
        featureId,
        text
      });
    }, 500);
  };
}