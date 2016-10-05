import { combineReducers } from 'redux';

function byId(state = {}, action) {
  switch (action.type) {
    case "LOAD_FEATURE_SUCCESS":
      return {
        ...state,
        [action.projectId + action.feature.id]: action.feature
      };
    case "SAVE_FEATURE_SUCCESS":
      return {
        ...state,
        [action.projectId + action.featureId]: {
          ...state[action.projectId + action.featureId],
          text: action.text
        }
      };
    default:
      return state;
  }
}

function listByProjectId(state = {}, action) {
  switch (action.type) {
    case "LOAD_FEATURES_SUCCESS":
      return {
        ...state,
        [action.projectId]: action.features
      };
    case "CREATE_FEATURE_SUCCESS":
      return {
        ...state,
        [action.projectId]: state[action.projectId].concat({
          id: Math.random() + '',
          name: action.name
        })
      };
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  listByProjectId
});