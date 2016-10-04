import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Features</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
