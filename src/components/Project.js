import React, { PropTypes } from 'react';
import { Menu, Button, Header, Segment, Dimmer, Loader, Image, Message } from 'semantic-ui-react';

import { STATUS_IMPORTING, STATUS_IMPORT_ERROR, STATUS_IMPORTED } from '../data/constants';
import ProjectSettings from '../components/ProjectSettings';
import paragraphImage from '../images/short-paragraph.png'


const Project = ({ user, project, onImportClick }) => {
  function ProjectMessage({ status }) {
    if (status === STATUS_IMPORTING) {
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Importing features</Loader>
          </Dimmer>

          <Image src={paragraphImage} />
        </Segment>
      );
    } else if (status === STATUS_IMPORT_ERROR) {
      return (
        <Message
          error
          header='There was an error importing your project features'
          list={[
            'Check your repository URL',
            'Check the project public key if your repo type is SSH'
          ]}
        />
      );
    }
    return <span></span>;
  }

  return (
    <div>
      <Menu secondary>
        <Menu.Item header>
          <Header as="h2">{project.name}</Header>
        </Menu.Item>
        {
          project.repo_url
            ? (
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button onClick={onImportClick} disabled={project.status === STATUS_IMPORTED}>Import features from repository</Button>
                  </Menu.Item>
                  {user.isStaff ? <Menu.Item>
                                    <ProjectSettings project={project} />
                                  </Menu.Item> : null }
                </Menu.Menu>
              )
            : <span></span>
        }
      </Menu>
      <ProjectMessage status={project.status} />
    </div>
  )
};

Project.propTypes = {
  user: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  onImportClick: PropTypes.func.isRequired
};

export default Project;