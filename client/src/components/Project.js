import React, { PropTypes } from 'react';

import { STATUS_ADDING, STATUS_ADDING_ERROR } from '../data/constants';

const Project = ({ project }) => {
  var status;
  if (project.status === STATUS_ADDING) {
    status = 'Importing...'
  } else if (project.status === STATUS_ADDING_ERROR) {
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