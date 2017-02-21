import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import Feature from '../components/Feature';
import LoaderParagraph from '../components/LoaderParagraph';

import { loadFeature } from '../actions/features';

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
          ? <LoaderParagraph text="Loading Feature" />
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