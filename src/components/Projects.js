import React, { PropTypes } from 'react';

import { Button, List, Segment, Menu, Header } from 'semantic-ui-react';
import { Link } from 'react-router';


function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ user, projects }) => {
  return (
    <div>
      <Menu secondary>
        <Menu.Item header>
          <Header as="h2">Projects</Header>
        </Menu.Item>
        {
          user.isStaff
            ? (
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button as={Link} to="/new-project" color="teal">New Project</Button>
                </Menu.Item>
              </Menu.Menu>
            )
            : null
        }
      </Menu>
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
      </Segment>
    </div>
  )
};

Projects.propTypes = {
  user: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

export default Projects;