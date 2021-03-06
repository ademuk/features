import { combineReducers } from 'redux';

import { LOAD_PROJECTS_SUCCESS, LOAD_PROJECT_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_STATUS } from '../actions/projects';
import { DESTROY_SESSION_SUCCESS } from '../actions/auth';

function byId(state = {}, action) {
  switch (action.type) {
    case LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        [action.project.id]: action.project
      };
    case UPDATE_PROJECT_STATUS:
      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          status: action.status
        }
      };
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return action.projects;
    case CREATE_PROJECT_SUCCESS:
      return state.concat({
        id: Math.random() + '',
        name: action.name
      });
    case DESTROY_SESSION_SUCCESS:
      return [];
    default:
      return state;
  }
}

function isCreatingProject(state = false, action) {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return true;
    case CREATE_PROJECT_SUCCESS:
    case UPDATE_PROJECT_STATUS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  list,
  isCreatingProject
});