import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Segment, Container, Menu, Header } from 'semantic-ui-react'

import LoginLink from '../components/LoginLink';
import { loadSession } from '../actions/auth';

import './App.css';

class App extends Component {
  render() {
    return (
      <Segment vertical>
        <Container>
          <Menu>
            <Menu.Item header>
              <Header as="h1"><Link to="/">Features</Link></Header>
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item>
                <LoginLink loggedIn={this.props.auth.doesSessionExist} />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          {this.props.children}
        </Container>
      </Segment>
    );
  }

  componentDidMount() {
    this.props.loadSession();
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  loadSession
})(App);
