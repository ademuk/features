import { combineReducers } from 'redux';

function doesSessionExist(state = false, action) {
  switch (action.type) {
    case "CREATE_SESSION_SUCCESS":
      return true;
    case "DESTROY_SESSION_SUCCESS":
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  doesSessionExist
});