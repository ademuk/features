import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Projects from '../components/Projects';
import { loadProjects, createProject } from '../actions';

class ProjectsPage extends Component {
  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Projects projects={this.props.projects} onCreateProject={this.createProject} />
      </div>
    )
  }

  createProject = () => {
    this.props.createProject(Math.random());
  }
}

ProjectsPage.propTypes = {
  loadProjects: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects.list
  };
}

export default connect(mapStateToProps, {
  loadProjects,
  createProject
})(ProjectsPage);