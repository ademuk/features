import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Form, Button } from 'semantic-ui-react';
import Formsy from 'formsy-react';

import { FormsyInput } from '../formsy-semantic-ui';
import { createProject } from '../actions/projects';

class NewProjectPage extends Component {

  handleSubmit = model => {
    this.props.createProject(model)
      .then(({ id }) => {
        browserHistory.push(`/project/${id}`);
      });
  };

  render() {
    return (
      <Form as={Formsy.Form} onValidSubmit={this.handleSubmit}>
        <h2>New Project</h2>
        <FormsyInput name="name" type="text" label="Project Name" placeholder="Project A" required />
        <FormsyInput name="repoUrl" type="text" label="Repository URL (Git)" placeholder="https://user:pass@hostname.com" />
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