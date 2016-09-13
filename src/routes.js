import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import ProjectsPage from './containers/ProjectsPage';
import ProjectPage from './containers/ProjectPage';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/projects"
           component={ProjectsPage}></Route>
    <Route path="/projects/:projectId"
           component={ProjectPage}></Route>
  </Route>
)