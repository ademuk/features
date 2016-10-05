import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import LoginLink from '../components/LoginLink';

import { loadSession } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Features</h1>
          <LoginLink loggedIn={this.props.auth.doesSessionExist} />
        </header>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    this.props.loadSession();
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  loadSession
})(App);
