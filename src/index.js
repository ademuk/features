import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { browserHistory } from 'react-router';

import Root from './containers/Root';
import projectsReducer from './reducers'
import './index.css';

const store = createStore(projectsReducer);

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);
