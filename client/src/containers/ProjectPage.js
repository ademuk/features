import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import config from '../config';
import { loadProject, updateProjectStatus } from '../actions';
import Project from '../components/Project';


class ProjectPage extends Component {

  componentDidMount() {
    const projectId = this.props.params.projectId;
    const updateProjectStatus = this.props.updateProjectStatus;

    const wsUrl = `${config.baseWebSocketUrl}/projects/${projectId}/stream/`;

    console.log("Connecting: " + wsUrl);

    this.socket = new WebSocket(wsUrl);

    this.socket.onopen = function () {
      console.log('Connected to: ' + wsUrl);
    };

    this.socket.onmessage = function(message) {
      console.log("Message received: " + message.data);

      const data = JSON.parse(message.data);

      if (data.status) {
        updateProjectStatus(projectId, data.status);
      }
    };

    this.props.loadProject(projectId);
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    const { project } = this.props;
    return (
      <div>
        {project
          ? <Project project={project} />
          : <p>Loading</p>
        }
        <div>{this.props.children}</div>
      </div>
    )
  }
}

ProjectPage.propTypes = {
  loadProject: PropTypes.func.isRequired,
  project: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects.byId[ownProps.params.projectId]
  };
}

export default connect(mapStateToProps, {
  loadProject,
  updateProjectStatus
})(ProjectPage);