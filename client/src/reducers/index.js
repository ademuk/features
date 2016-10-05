import { combineReducers } from 'redux';

import auth from './auth';
import projects from './projects';
import features from './features';

export default combineReducers({
  auth,
  projects,
  features
});