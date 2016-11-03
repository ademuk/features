import React from 'react';
import Formsy from 'formsy-react';
import { Form } from 'semantic-ui-react';


export const FormsyInput = React.createClass({

  mixins: [Formsy.Mixin],

  getInitialState() {
    return { value: this.controlledValue() };
  },

  controlledValue(props = this.props) {
    return props.value || '';
  },

  changeValue(event) {
    this.setState({ value: event.currentTarget.value });
    this.setValue(event.currentTarget.value);
  },

  render() {
    return (
      <Form.Input type={this.props.type}
                  name={this.props.name}
                  label={this.props.label}
                  value={this.state.value}
                  placeholder={this.props.placeholder}
                  required={this.isRequired()}
                  error={this.isFormSubmitted() && this.showRequired()}
                  onChange={this.changeValue} />
    );
  }
});

