import api from '../data/api';

export const LOAD_FEATURES_SUCCESS = 'LOAD_FEATURES_SUCCESS';
export const LOAD_FEATURE_SUCCESS = 'LOAD_FEATURE_SUCCESS';
export const IMPORT_FEATURES_SUCCESS = 'IMPORT_FEATURES_SUCCESS';

export function loadFeatures(projectId) {
  return dispatch => {
    api.get(`/projects/${projectId}/features/`)
      .then(function (response) {
        dispatch({
          type: LOAD_FEATURES_SUCCESS,
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
          type: LOAD_FEATURE_SUCCESS,
          projectId,
          feature: response.data
        });

        return response.data;
      });
  };
}

export function importFeatures(projectId) {
  return dispatch => {
    return api.post(`/projects/${projectId}/features/`)
      .then(response => {
        dispatch({
          type: IMPORT_FEATURES_SUCCESS
        });

        return response.data;
      })
  };
}
