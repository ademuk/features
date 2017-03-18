import React, { PropTypes } from 'react';

import { List, Segment } from 'semantic-ui-react';

import { Link } from 'react-router';

function getFeaturePath(projectId, id) {
  return `/project/${projectId}/feature/${id}`;
}

const Features = ({ projectId, features }) => {
  return (
    <Segment>
      {
        features.length ?
          (
            <List divided relaxed>
              {features.map(feature => {
                return (
                  <List.Item key={feature.id}>
                    <Link to={getFeaturePath(projectId, feature.id)}>{feature.name}</Link>
                  </List.Item>
                )
              })}
            </List>
          ) : <p>You don't currently have any features.</p>
      }
    </Segment>
  )
};

Features.propTypes = {
  projectId: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired
};

export default Features;