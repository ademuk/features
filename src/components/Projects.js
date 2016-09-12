import React from 'react';

function Projects(props) {
  return (
    <div>
      <ol>
        {props.projects.map(project => <li key={project.id}><a href={project.id}>{project.name}</a></li>)}
      </ol>
      <button onClick={props.onAddProjectClick}>Add Project</button>
    </div>
  )
}

export default Projects;