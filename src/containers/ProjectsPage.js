import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Projects from '../components/Projects';
import { loadProjects } from '../actions/projects';

class ProjectsPage extends Component {
  componentDidMount() {
    if (this.props.doesSessionExist) {
      this.props.loadProjects();
    }
  }

  componentWillReceiveProps(props) {
    if (!this.props.doesSessionExist && props.doesSessionExist) {
      props.loadProjects();
    }
  }

  render() {
    const { doesSessionExist, projects } = this.props;
    return (
      doesSessionExist ?
        <Projects projects={projects} user={this.props.user} /> :
        <div></div>
    )
  }
}

ProjectsPage.propTypes = {
  loadProjects: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects.list,
    doesSessionExist: state.auth.doesSessionExist,
    user: state.auth.user
  };
}

export default connect(mapStateToProps, {
  loadProjects
})(ProjectsPage);