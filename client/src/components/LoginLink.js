import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const LoginLink = function({ loggedIn }) {
  return (
    loggedIn ?
      <Link to="/logout">Log-out</Link> :
      <Link to="/login">Log-in</Link>
  );
};

LoginLink.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default LoginLink;