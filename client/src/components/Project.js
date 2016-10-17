import React, { PropTypes } from 'react';

const Project = ({ project }) => {
  var status;
  if (project.status === 'adding') {
    status = 'Importing...'
  } else if (project.status === 'adding_error') {
    status = 'There was an error importing your project. Please check your repository URL and try again.'
  }
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{status}</p>
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;