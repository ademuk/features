import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { loadFeatures } from '../actions';
import Features from '../components/Features';

class FeaturesPage extends Component {
  componentWillMount() {
    const { projectId } = this.props.params;
    this.props.loadFeatures(projectId);
  }

  componentWillReceiveProps(props) {
    const { project } = this.props;
    if (project) {
      const newStatus = props.project.status;
      if (newStatus !== project.status && newStatus === 'added') {
        this.props.loadFeatures(project.id);
      }
    }
  }

  render () {
    const { project, features } = this.props;
    return (
      <div>
        {(project && features)
          ? <Features projectId={project.id} features={features} />
          : <p>Loading</p>
        }
      </div>
    )
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