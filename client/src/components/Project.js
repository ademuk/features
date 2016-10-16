import React, { PropTypes } from 'react';

const Project = ({ project }) => {
  var status;
  if (project.status === 'adding') {
    status = <p>Importing...</p>
  }
  return (
    <div>
      <h2>{project.name}</h2>
      {status}
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;