import React, { PropTypes } from 'react';

import { Link } from 'react-router';

function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ol>
        {projects.map(project => {
          return (
            <li key={project.id}>
              <Link to={getProjectPath(project.id)}>{project.name}</Link>
            </li>
          )
        })}
      </ol>
      <Link to="/add-project">Add Project</Link>
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;