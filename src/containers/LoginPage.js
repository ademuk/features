import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input } from 'semantic-ui-react';
import Formsy from 'formsy-react';

import { FormsyField } from '../formsy-semantic-ui';
import { createSession } from '../actions/auth';

class LoginPage extends Component {

  handleSubmit = model => {
    this.props.createSession(model)
      .then(() => {
        browserHistory.push(this.props.location.query.path || '/');
      });
  };

  render() {
    const { auth: { isLoggingIn } } = this.props;
    return (
      <Form as={Formsy.Form} onValidSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <FormsyField control={Input} name="username" label="Username" placeholder="amigo" required />
        <FormsyField control={Input} name="password" label="Password" placeholder="B33d33d33" type="password" required />
        <Button type="submit" color="teal" loading={isLoggingIn}>Log-in</Button>
      </Form>
    );
  }
}

LoginPage.propTypes = {
  createSession: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  createSession
})(LoginPage);
