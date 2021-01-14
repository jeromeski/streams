import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Field is a component, reduxForm is a function

class StreamCreate extends Component {
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <div>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
