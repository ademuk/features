import React, { Component, PropTypes } from 'react';
import { Button, Icon, Header, Modal } from 'semantic-ui-react';

import './ProjectSettings.css';

class ProjectSettings extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  });

  handleClose = (e) => this.setState({
    modalOpen: false,
  });

  render() {
    const {
      project
    } = this.props;

    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} icon><Icon name='setting' /></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>{project.name} settings</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>SSH Public Key</Header>
            <p>Add the following public key to your repository so that Features can access it.</p>
            <code>{project.public_key}</code>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

ProjectSettings.propTypes = {
  project: PropTypes.object
};

export default ProjectSettings;