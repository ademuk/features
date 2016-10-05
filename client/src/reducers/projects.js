import { combineReducers } from 'redux';

function byId(state = {}, action) {
  switch (action.type) {
    case "LOAD_PROJECT_SUCCESS":
      return {
        ...state,
        [action.project.id]: action.project
      };
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case "LOAD_PROJECTS_SUCCESS":
      return action.projects;
    case "CREATE_PROJECT_SUCCESS":
      return state.concat({
        id: Math.random() + '',
        name: action.name
      });
    case "DESTROY_SESSION_SUCCESS":
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  list
});