import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ projects, onCreateProject }) => {
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
      <button onClick={onCreateProject}>Add Project</button>
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onCreateProject: PropTypes.func.isRequired
};

export default Projects;