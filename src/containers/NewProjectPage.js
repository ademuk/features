import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { createProject } from '../actions/projects';

class NewProjectPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      repoUrl: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Project</h2>
        <ol>
          <li>
            <label>
              <span>Project Name*</span>
              <input name="name" type="text" placeholder="Project A" value={this.state.name} required onChange={this.handleChange} />
            </label>
          </li>
          <li>
            <label>
              <span>Repository URL (Git)</span>
              <input name="repoUrl" type="text" placeholder="https://user:pass@hostname.com" value={this.state.repoUrl} onChange={this.handleChange} />
            </label>
          </li>
          <li>
            <input type="submit" value="Add Project" />
          </li>
        </ol>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createProject(this.state)
      .then(({ id }) => {
        browserHistory.push(`/project/${id}`);
      });
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  createProject
})(NewProjectPage);