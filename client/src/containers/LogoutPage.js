import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import { destroySession } from '../actions';

class LogoutPage extends Component {
  render() {
    return (
      <div>
        <h2>Logging out</h2>
      </div>
    );
  }

  componentDidMount() {
    this.props.destroySession();
    browserHistory.push('/login');
  }
}

LogoutPage.propTypes = {
  destroySession: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  destroySession
})(LogoutPage);
