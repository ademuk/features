import React, { Component } from 'react';

import { connect } from 'react-redux';

import Projects from '../components/Projects';
import { addProject } from '../actions'

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Projects projects={this.props.projects} onAddProjectClick={this.props.addProject} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addProject
})(ProjectPage);