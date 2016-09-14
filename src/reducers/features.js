import { combineReducers } from 'redux';

function byId(state = {}, action) {
  switch (action.type) {
    case "LOAD_FEATURE":
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
    case "LOAD_FEATURES":
      return {
        ...state,
        [action.projectId]: action.features
      };
    case "CREATE_FEATURE":
      return state.concat({
        id: Math.random() + '',
        name: action.name
      });
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  listByProjectId
});