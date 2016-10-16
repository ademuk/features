import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Feature from '../components/Feature';

import { loadFeature } from '../actions';

class FeaturePage extends Component {

  componentDidMount() {
    const { projectId, featureId } = this.props.params;
    this.props.loadFeature(projectId, featureId);
  }

  render () {
    const { feature } = this.props;
    return (
      <div>
        {!feature
          ? <p>Loading</p>
          : <Feature feature={feature} />
        }
      </div>
    )
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
  loadFeature
})(FeaturePage)