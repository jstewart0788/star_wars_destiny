import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {RaisedButton} from 'material-ui'
import Send from 'material-ui/svg-icons/content/send';
import Clear from 'material-ui/svg-icons/content/clear';
import { TextField } from 'redux-form-material-ui'

// validation functions
const required = value => value == null ? 'Required' : undefined;
const email = value => value &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

class SignUpPage extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="username"
                    component={TextField}
                    floatingLabelText="Username" 
                    validate={required}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={TextField}
                    floatingLabelText="Password" 
                    validate={required}
                    type="password"
                />
            </div>
            <div>
                <Field
                    name="email"
                    component={TextField}
                    floatingLabelText="Email Address" 
                    validate={ [required, email]}
                />
            </div>
            <div>
                <Field
                    name="avatar"
                    component={TextField}
                    floatingLabelText="Avatar URL" 
                />
            </div>
            <div>
                <RaisedButton
                    type="submit" 
                    primary
                    disabled={submitting} 
                    icon={<Send/>}
                    >
                    Submit
                </RaisedButton>
                <RaisedButton 
                    type="button" 
                    primary 
                    disabled={pristine || submitting} 
                    onClick={reset} 
                    icon={<Clear/>}
                    >
                    Clear
                </RaisedButton>
            </div>
        </form>
    );
  }
};

SignUpPage.propTypes = {}

SignUpPage = reduxForm({
  form: 'SignUp' // a unique name for this form
})(SignUpPage);

export default SignUpPage;