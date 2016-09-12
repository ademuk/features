import { combineReducers } from 'redux';

function projects(state = [], action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return state.concat({
        id: Math.random(),
        name: action.name
      });
    default:
      return state;
  }
}

export default combineReducers({
  projects
});