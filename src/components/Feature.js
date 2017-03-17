import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/gherkin';
import 'brace/theme/monokai';

class Feature extends Component {

  render() {
    const { feature } = this.props;
    return (
      <div>
        <h3>{feature.name}</h3>
        <AceEditor
          value={feature.body}
          width="100%"
          minLines={15}
          maxLines={300}
          mode="gherkin"
          theme="monokai"
          setOptions={{useSoftTabs: true}}
          tabSize={2}
          editorProps={{$blockScrolling: true}} />
      </div>
    );
  }
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired
};

export default Feature;