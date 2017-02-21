import React, { PropTypes } from 'react';


const ImagePreloader = ({ src }) => {
  return (
    <div style={{'display': 'none'}}>
      { src.map(img => <img key={img} src={img} alt={'Preloading image: ' + img} />) }
    </div>
  )
};

ImagePreloader.propTypes = {
  src: PropTypes.array.isRequired
};

export default ImagePreloader;
