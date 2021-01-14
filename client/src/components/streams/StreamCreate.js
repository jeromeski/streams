import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Field is a component, reduxForm is a function

class StreamCreate extends Component {
  render() {
    return (
      <div>
        <Field name='title' />
        <Field name='description' />
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
