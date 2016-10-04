import { combineReducers } from 'redux';

function byId(state = {}, action) {
  switch (action.type) {
    case "LOAD_PROJECT":
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
    case "LOAD_PROJECTS":
      return action.projects;
    case "CREATE_PROJECT":
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
  list
});