import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/gherkin';
import 'brace/theme/monokai';

class Feature extends Component {
  constructor(props) {
    super();
    this.state = {
      body: props.feature.body
    };
  }

  render() {
    const { feature } = this.props;
    return (
      <div>
        <h3>{feature.name}</h3>
        <AceEditor
          value={this.state.body}
          onChange={this.onChange}
          width="1024px"
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

  onChange = (value) => {
    this.setState({text: value});
  };
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired
};

export default Feature;