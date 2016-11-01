import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Form, Button } from 'semantic-ui-react';

import { createProject } from '../actions/projects';

class NewProjectPage extends Component {

  handleSubmit = (e, serializedForm) => {
    e.preventDefault();

    this.props.createProject(serializedForm)
      .then(({ id }) => {
        browserHistory.push(`/project/${id}`);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>New Project</h2>
        <Form.Input name="name" type="text" label="Project Name" placeholder="Project A" required />
        <Form.Input name="repoUrl" type="text" label="Repository URL (Git)" placeholder="https://user:pass@hostname.com" />
        <Button type="submit" color="teal">Add Project</Button>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  createProject
})(NewProjectPage);