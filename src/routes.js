import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import LogoutPage from './containers/LogoutPage';
import ProjectsPage from './containers/ProjectsPage';
import ProjectPage from './containers/ProjectPage';
import FeaturesPage from './containers/FeaturesPage';
import FeaturePage from './containers/FeaturePage';
import NewProjectPage from './containers/NewProjectPage';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={ProjectsPage} />
    <Route path="project/:projectId" component={ProjectPage}>
      <IndexRoute component={FeaturesPage} />
      <Route path="feature/:featureId" component={FeaturePage} />
    </Route>
    <Route path="new-project" component={NewProjectPage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
  </Route>
)