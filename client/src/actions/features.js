import api from '../data/api';

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
