import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react';
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
    const { auth: { isLoggingIn, isLogInError } } = this.props;

    return (
      <Form as={Formsy.Form} onValidSubmit={this.handleSubmit}>
        <h2>Login</h2>

        <Message negative hidden={!isLogInError}>
          <Message.Header>There was a problem logging you in</Message.Header>
          <p>Please check your credentials and try again</p>
        </Message>

        <FormsyField control={Input} name="username" label="Username" required />
        <FormsyField control={Input} name="password" label="Password" type="password" required />
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
