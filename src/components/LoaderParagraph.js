import React, { PropTypes } from 'react';

import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react';

import paragraphImage from '../images/short-paragraph.png';

const LoaderParagraph = ({ text, inverted }) => {
  return (
    <Segment>
      <Dimmer active inverted={inverted}>
        <Loader>{text}</Loader>
      </Dimmer>

      <Image src={paragraphImage} />
    </Segment>
   )
};

LoaderParagraph.propTypes = {
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool
};

export default LoaderParagraph;
