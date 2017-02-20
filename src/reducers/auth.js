import { combineReducers } from 'redux';

import { CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS, DESTROY_SESSION_SUCCESS } from '../actions/auth';

function doesSessionExist(state = false, action) {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS:
      return true;
    case DESTROY_SESSION_SUCCESS:
      return false;
    default:
      return state;
  }
}

function user(state = false, action) {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS:
      return {
        isStaff: action.session.is_staff
      };
    case DESTROY_SESSION_SUCCESS:
      return null;
    default:
      return state;
  }
}

function isLoggingIn(state = false, action) {
  switch (action.type) {
    case CREATE_SESSION_REQUEST:
      return true;
    case CREATE_SESSION_SUCCESS:
    case DESTROY_SESSION_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  doesSessionExist,
  user,
  isLoggingIn
});