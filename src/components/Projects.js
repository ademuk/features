import React from 'react';

const onAddProjectClick = function () {
  const projects = this.state.projects;
  this.setState({
    projects: projects.concat([{
      id: Math.random(),
      name: 'foo'
    }])
  });
};

const projects = [];

function Projects(props) {
  return <div>
    <h2>Projects</h2>
    <ol>
      {projects.map(project => <li key={project.id}><a href={project.id}>{project.name}</a></li>)}
    </ol>
    <button onClick={onAddProjectClick}>Add Project</button>
  </div>
}

export default Projects;