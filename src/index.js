import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

import Root from './containers/Root';
import projectsReducer from './reducers'
import '../node_modules/semantic-ui-css/semantic.css';
import './index.css';

const store = createStore(
  projectsReducer,
  applyMiddleware(thunk)
);

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);
