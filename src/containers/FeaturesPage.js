import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadFeatures } from '../actions';
import Features from '../components/Features';

class FeaturePage extends Component {
  componentWillMount() {
    const { projectId } = this.props.params;
    this.props.loadFeatures(projectId);
  }

  render () {
    const { params: { projectId }, features } = this.props;
    return (
      <div>
        {!features
          ? <h2>Loading</h2>
          : <Features projectId={projectId} features={features}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { projectId } = ownProps.params;
  return {
    features: state.features.listByProjectId[projectId]
  };
}

export default connect(mapStateToProps, {
  loadFeatures
})(FeaturePage)