import React, { PropTypes } from 'react';

import { List } from 'semantic-ui-react';

import { Link } from 'react-router';

function getFeaturePath(projectId, id) {
  return `/project/${projectId}/feature/${id}`;
}

const Features = ({ projectId, features }) => {
  return (
    <List divided relaxed>
      {features.map(feature => {
        return (
          <List.Item key={feature.id}>
            <Link to={getFeaturePath(projectId, feature.id)}>{feature.name}</Link>
          </List.Item>
        )
      })}
    </List>
  )
};

Features.propTypes = {
  projectId: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired
};

export default Features;