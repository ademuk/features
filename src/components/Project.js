import React, { PropTypes } from 'react';
import { Menu, Button, Header } from 'semantic-ui-react';

import { STATUS_ADDING, STATUS_ADDING_ERROR, STATUS_ADDED } from '../data/constants';
import ProjectSettings from '../components/ProjectSettings';


const Project = ({ project, onImportClick }) => {
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
        {
          (project.status === STATUS_ADDED) ?
            (
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button onClick={onImportClick}>Import features from repository</Button>
                </Menu.Item>
                <Menu.Item>
                  { project.is_ssh_repo ? <ProjectSettings project={project} /> : <div></div> }
                </Menu.Item>
              </Menu.Menu>
            ) : <div></div>
        }

      </Menu>
      <p>{status}</p>
    </div>
  )
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  onImportClick: PropTypes.func.isRequired
};

export default Project;