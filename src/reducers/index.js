import { combineReducers } from 'redux';

import projects from './projects';
import features from './features';

export default combineReducers({
  projects,
  features
});