import React from 'react';
import { Link } from 'react-router';

function getProjectPath(id) {
  return `/projects/${id}`;
}

function Projects(props) {
  return (
    <div>
      <ol>
        {props.projects.map(project => <li key={project.id}><Link to={getProjectPath(project.id)}>{project.name}</Link></li>)}
      </ol>
      <button onClick={props.onCreateProject}>Add Project</button>
    </div>
  )
}

export default Projects;