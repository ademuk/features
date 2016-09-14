import React from 'react';

import { Link } from 'react-router';

function getFeaturePath(projectId, id) {
  return `/project/${projectId}/feature/${id}`;
}

export default function (props) {
  const { projectId, features } = props;
  return (
    <ol>
      {features.map(feature => <li key={feature.id}><Link to={getFeaturePath(projectId, feature.id)}>{feature.name}</Link></li>)}
    </ol>
  )
}