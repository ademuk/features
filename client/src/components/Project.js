import React, { PropTypes } from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;