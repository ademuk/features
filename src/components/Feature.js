import React, { PropTypes } from 'react';

const Feature = ({ feature }) => {
  return (
    <div>
      <h2>{feature.name}</h2>
      <p>{feature.description}</p>
      <textarea defaultValue={feature.text}></textarea>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object.isRequired
};

export default Feature;