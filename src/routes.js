import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/projects"
           component={Projects}></Route>
  </Route>
)