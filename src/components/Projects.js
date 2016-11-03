import React, { PropTypes } from 'react';

import { Button, List, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ projects }) => {
  return (
    <div>
      <Menu secondary size="mini">
        <Menu.Item>
          <h2>Projects</h2>
        </Menu.Item>
        <Menu.Item>
          <Button as={Link} to="/new-project" color="teal">New Project</Button>
        </Menu.Item>
      </Menu>
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
    </div>
  )
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;