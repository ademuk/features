import React, { PropTypes } from 'react';
import { Menu, Button, Header } from 'semantic-ui-react';

import { STATUS_ADDING, STATUS_ADDING_ERROR } from '../data/constants';
import ProjectSettings from '../components/ProjectSettings';


const Project = ({ project }) => {
  var status;

  if (project.status === STATUS_ADDING) {
    status = 'Importing...'
  } else if (project.status === STATUS_ADDING_ERROR) {
    status = 'There was an error importing your project. Please check your repository URL and try again.'
  }

  return (
    <div>
      <Menu secondary>
        <Menu.Item header>
          <Header as="h2">{project.name}</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <ProjectSettings project={project} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <p>{status}</p>
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;