import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { loadFeatures } from '../actions/features';
import Features from '../components/Features';
import LoaderCentered from '../components/LoaderCentered';
import { STATUS_IMPORTED, STATUS_IMPORTING } from '../data/constants';


class FeaturesPage extends Component {
  componentWillMount() {
    const { projectId } = this.props.params;
    this.props.loadFeatures(projectId);
  }

  componentWillReceiveProps(props) {
    const { project } = this.props;
    if (project) {
      const newStatus = props.project.status;
      if (newStatus !== project.status && newStatus === STATUS_IMPORTED) {
        this.props.loadFeatures(project.id);
      }
    }
  }

  render () {
    const { project, features } = this.props;
    return (project && features)
      ? (project.status === STATUS_IMPORTING ? null : <Features projectId={project.id} features={features} />)
      : <Segment>
          <LoaderCentered />
        </Segment>;
  }
}

FeaturesPage.propTypes = {
  loadFeatures: PropTypes.func.isRequired,
  features: PropTypes.array,
  project: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { projectId } = ownProps.params;
  return {
    project: state.projects.byId[projectId],
    features: state.features.listByProjectId[projectId]
  };
}

export default connect(mapStateToProps, {
  loadFeatures
})(FeaturesPage)