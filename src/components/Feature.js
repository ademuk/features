import React from 'react';

export default function (props) {
  const { feature } = props;
  return (
    <div>
      <h2>{feature.name}</h2>
      <p>{feature.description}</p>
      <textarea defaultValue={feature.text}></textarea>
    </div>
  );
}