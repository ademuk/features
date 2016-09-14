import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadProject, loadFeatures } from '../actions';
import Project from '../components/Project';

class ProjectPage extends Component {

  componentWillMount() {
    this.props.loadProject(this.props.params.projectId);
    this.props.loadFeatures(this.props.params.projectId);
  }

  render() {
    const { project, features } = this.props;
    return (
      <div>
        {!project
          ? <h2>Loading</h2>
          : <Project project={project} features={features} />
        }
        <div>{this.props.children}</div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects.byId[ownProps.params.projectId]
  };
}

export default connect(mapStateToProps, {
  loadProject,
  loadFeatures
})(ProjectPage);