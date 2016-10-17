import api from '../data/api';

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
