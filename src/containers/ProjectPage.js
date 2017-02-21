import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import config from '../config';
import { loadProject, updateProjectStatus } from '../actions/projects';
import { importFeatures } from '../actions/features';

import Project from '../components/Project';
import LoaderCentered from '../components/LoaderCentered';


class ProjectPage extends Component {

  componentDidMount() {
    const projectId = this.props.params.projectId;

    this._setupWebSocket(projectId, this.props.updateProjectStatus);

    this.props.loadProject(projectId);
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    const { user, project } = this.props;
    return (
      <div>
        {project
          ? <Project project={project} user={user} onImportClick={this.handleImportClick} />
          : <LoaderCentered />
        }
        {this.props.children}
      </div>
    )
  }

  handleImportClick = () => {
    this.props.importFeatures(this.props.params.projectId);
  };

  _setupWebSocket(projectId, updateProjectStatus) {
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
  }
}

ProjectPage.propTypes = {
  loadProject: PropTypes.func.isRequired,
  importFeatures: PropTypes.func.isRequired,
  project: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    project: state.projects.byId[ownProps.params.projectId],
    user: state.auth.user
  };
}

export default connect(mapStateToProps, {
  loadProject,
  importFeatures,
  updateProjectStatus
})(ProjectPage);