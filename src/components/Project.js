import React from 'react';

export default function (props) {
  const { project } = props;
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  )
}