import React, { PropTypes } from 'react';

import { Button, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

function getProjectPath(id) {
  return `/project/${id}`;
}

const Projects = ({ user, projects }) => {
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
        { user.isStaff ? <Button as={Link} to="/new-project" color="teal">New Project</Button> : null }
      </Segment>
    </div>
  )
};

Projects.propTypes = {
  user: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

export default Projects;