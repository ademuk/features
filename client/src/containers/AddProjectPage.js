import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createProject } from '../actions';

class AddProjectPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      gitUrl: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add Project</h2>
          <ol>
            <li>
              <label>
                Project Name
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
              </label>
            </li>
            <li>
              <label>
                GIT Repository URL
                <input name="gitUrl" type="text" value={this.state.gitUrl} onChange={this.handleChange} />
              </label>
            </li>
            <li>
              <input type="submit" value="Add Project" />
            </li>
          </ol>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createProject(this.state);
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  createProject
})(AddProjectPage);