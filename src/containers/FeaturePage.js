import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { loadFeature, saveFeature } from '../actions';
import Feature from '../components/Feature';

class FeaturePage extends Component {
  componentWillMount() {
    const { projectId, featureId } = this.props.params;
    this.props.loadFeature(projectId, featureId);
  }

  render () {
    const { feature } = this.props;
    return (
      <div>
        {!feature
          ? <h2>Loading</h2>
          : <Feature feature={feature} onSave={this.saveFeature} />
        }
      </div>
    )
  }

  saveFeature = (text) => {
    const { projectId, featureId } = this.props.params;
    this.props.saveFeature(projectId, featureId, text);
  }
}

FeaturePage.propTypes = {
  loadFeature: PropTypes.func.isRequired,
  feature: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { projectId, featureId } = ownProps.params;
  return {
    feature: state.features.byId[projectId + featureId]
  };
}

export default connect(mapStateToProps, {
  loadFeature,
  saveFeature
})(FeaturePage)