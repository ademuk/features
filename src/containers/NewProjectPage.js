import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { Form, Button, Input, Select } from 'semantic-ui-react';
import Formsy from 'formsy-react';
import { FormsyField } from '../formsy-semantic-ui';

import { createProject } from '../actions/projects';

const sshPlaceholder = "user@hostname.com:repo.git";

class NewProjectPage extends Component {

  constructor() {
    super();

    this.state = {
      repoType: "ssh",
      repoUrlPlaceholder: sshPlaceholder
    };
  }

  handleSubmit = model => {
    this.props.createProject(model)
      .then(({ id }) => {
        browserHistory.push(`/project/${id}`);
      });
  };

  handleChange = (e, { value }) => {
    this.setState({
      repoUrlPlaceholder: value === "ssh" ? sshPlaceholder : "https://[user:pass@]hostname.com"
    });
  };

  render() {
    const options = [
      { text: 'SSH', value: 'ssh' },
      { text: 'HTTPS', value: 'https' }
    ];

    return (
      <Form as={Formsy.Form} onValidSubmit={this.handleSubmit}>
        <h2>New Project</h2>
        <FormsyField control={Input} name="name" label="Project Name" placeholder="Project A" required />
        <Form.Group widths='equal'>
          <Form.Select name="repoType" options={options} label="Repository type" defaultValue="ssh" onChange={this.handleChange} />
          <FormsyField control={Input} name="repoUrl" label="Repository URL (Git)" placeholder={this.state.repoUrlPlaceholder} />
        </Form.Group>

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