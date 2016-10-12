import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { loadProject, updateProjectStatus } from '../actions';
import Project from '../components/Project';

class ProjectPage extends Component {

  componentDidMount() {
    const projectId = this.props.params.projectId;
    const updateProjectStatus = this.props.updateProjectStatus;

    const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
    const ws_url = ws_scheme + '://localhost:8000/api/projects/' + projectId + '/stream/';

    console.log("Connecting: " + ws_url)

    const socket = new WebSocket(ws_url);

    socket.onopen = function () {
      console.log('Connected to: ' + ws_url);
    };

    socket.onmessage = function(message) {
      console.log("Message received: " + message.data);

      const data = JSON.parse(message.data);

      if (data.status) {
        updateProjectStatus(projectId, data.status);
      }
    };

    this.props.loadProject(projectId);
  }

  render() {
    const { project } = this.props;
    return (
      <div>
        {!project
          ? <h2>Loading</h2>
          : (project.status === 'adding'
              ? <h2>Adding</h2>
              : <Project project={project} />)
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