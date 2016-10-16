import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import LoginLink from '../components/LoginLink';
import { loadSession } from '../actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Features</h1>
          <nav>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <LoginLink loggedIn={this.props.auth.doesSessionExist} />
              </li>
            </ol>
          </nav>
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
