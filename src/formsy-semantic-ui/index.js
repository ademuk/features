import React from 'react';
import Formsy from 'formsy-react';
import { Form, Input } from 'semantic-ui-react';


export const FormsyField = React.createClass({

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
    const {
      // eslint-disable-next-line
      validationError,
      // eslint-disable-next-line
      validationErrors,
      ...nonFormsyProps
    } = this.props;

    return (
      <Form.Field {...nonFormsyProps}
                  value={this.state.value}
                  onChange={this.changeValue}
                  required={this.isRequired()}
                  error={this.isFormSubmitted() && this.showRequired()}>
      </Form.Field>
    );
  }
});


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
    const {
      // eslint-disable-next-line
      validationError,
      // eslint-disable-next-line
      validationErrors,
      ...nonFormsyProps
    } = this.props;

    return (
      <Form.Input {...nonFormsyProps}
                  value={this.state.value}
                  required={this.isRequired()}
                  error={this.isFormSubmitted() && this.showRequired()}
                  onChange={this.changeValue} />
    );
  }
});

