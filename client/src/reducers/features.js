import { combineReducers } from 'redux';

import { LOAD_FEATURES_SUCCESS, LOAD_FEATURE_SUCCESS, CREATE_FEATURE_SUCCESS } from '../actions/features';

function byId(state = {}, action) {
  switch (action.type) {
    case LOAD_FEATURE_SUCCESS:
      return {
        ...state,
        [action.projectId + action.feature.id]: action.feature
      };
    default:
      return state;
  }
}

function listByProjectId(state = {}, action) {
  switch (action.type) {
    case LOAD_FEATURES_SUCCESS:
      return {
        ...state,
        [action.projectId]: action.features
      };
    case CREATE_FEATURE_SUCCESS:
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