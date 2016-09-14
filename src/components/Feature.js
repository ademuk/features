import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/gherkin';
import 'brace/theme/monokai';

class Feature extends Component {
  constructor(props) {
    super();
    this.state = {
      text: props.feature.text
    };
  }

  render() {
    const { feature } = this.props;
    return (
      <div>
        <h2>{feature.name}</h2>
        <p>{feature.description}</p>
        <AceEditor
          value={this.state.text}
          mode="gherkin"
          theme="monokai"
          height="300px"
          onChange={this.onChange}>
        </AceEditor>
        <button onClick={this.save}>Save</button>
      </div>
    );
  }

  onChange = (value) => {
    this.setState({text: value});
  };

  save = () => {
    this.props.onSave(this.state.text);
  }
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired
};

export default Feature;