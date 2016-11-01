import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Form, Button } from 'semantic-ui-react';

import { createSession } from '../actions/auth';

class LoginPage extends Component {
  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e, serializedForm) => {
    e.preventDefault();

    this.props.createSession(serializedForm)
      .then(() => {
        browserHistory.push('/');
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <Form.Input name="username" label="Username" placeholder="amigo" />
        <Form.Input name="password" label="Password" type="password" placeholder="B33d33d33" />
        <Button type="submit" color="teal">Log-in</Button>
      </Form>
    );
  }
}

LoginPage.propTypes = {
  createSession: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  createSession
})(LoginPage);
