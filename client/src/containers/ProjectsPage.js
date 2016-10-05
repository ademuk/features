import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Projects from '../components/Projects';
import { loadProjects, createProject } from '../actions';

class ProjectsPage extends Component {
  componentWillMount() {
    if (this.props.doesSessionExist) {
      this.props.loadProjects();
    }
  }

  render() {
    const { doesSessionExist, projects } = this.props;
    return (
      doesSessionExist ?
        <Projects projects={projects} onCreateProject={this.createProject} /> :
        <div></div>
    )
  }

  createProject = () => {
    this.props.createProject('Project ' + Math.random());
  }
}

ProjectsPage.propTypes = {
  loadProjects: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects.list,
    doesSessionExist: state.auth.doesSessionExist
  };
}

export default connect(mapStateToProps, {
  loadProjects,
  createProject
})(ProjectsPage);