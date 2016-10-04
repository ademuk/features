import React, { PropTypes } from 'react';

import { Link } from 'react-router';

function getFeaturePath(projectId, id) {
  return `/project/${projectId}/feature/${id}`;
}

const Features = ({ projectId, features, onCreateFeature }) => {
  return (
    <div>
      <ol>
        {features.map(feature => {
          return (
            <li key={feature.id}>
              <Link to={getFeaturePath(projectId, feature.id)}>{feature.name}</Link>
            </li>
          )
        })}
      </ol>
      <button onClick={onCreateFeature}>Add Feature</button>
    </div>
  )
};

Features.propTypes = {
  projectId: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired
};

export default Features;