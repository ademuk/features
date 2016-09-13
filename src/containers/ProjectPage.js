import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadProject } from '../actions';

class ProjectPage extends Component {

  componentWillMount() {
    this.props.loadProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;
    return (
      <div>
      {!project
        ? <h2>Loading</h2>
        : <div>
            <h2>{project.id} - {project.name}</h2>
            <p>{project.description}</p>
          </div>
      }
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
  loadProject
})(ProjectPage);