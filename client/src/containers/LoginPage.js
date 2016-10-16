import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { browserHistory } from 'react-router'

import { createSession } from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <ol>
            <li>
              <label>
                <span>Username</span>
                <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
              </label>
            </li>
            <li>
              <label>
                <span>Password</span>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </li>
            <li>
              <input type="submit" value="Log-in" />
            </li>
          </ol>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createSession(this.state)
      .then(() => {
        browserHistory.push('/');
      });
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
