import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import { Segment, Container, Menu, Header } from 'semantic-ui-react'

import LoginLink from '../components/LoginLink';
import ImagePreloader from '../components/ImagePreloader';
import { loadSession } from '../actions/auth';

import './App.css';

import paragraphImage from '../images/short-paragraph.png';


class App extends Component {
  render() {
    return (
      <Segment vertical>
        <Container>
          <ImagePreloader src={[paragraphImage]} />
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
    const payload = this.props.loadSession();
    const path = this.props.location.pathname;
    const isValidSession = payload && payload.exp > (Date.now() / 1000);

    if (!isValidSession && path !== '/login') {
      browserHistory.push('/login?path=' + path);
    }
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
