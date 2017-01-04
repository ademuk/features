import React, { PropTypes } from 'react';

import { Button, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <Segment>
        <List divided relaxed>
          {
            projects.length ?
              projects.map(project => {
                return (
                  <List.Item key={project.id}>
                    <Link to={getProjectPath(project.id)}>{project.name}</Link>
                  </List.Item>
                )
              }) :
              <div></div>
          }

        </List>
        <Button as={Link} to="/new-project" color="teal">New Project</Button>
      </Segment>
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;