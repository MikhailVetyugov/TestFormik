import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function validateEmail(value) {
  console.log('validateEmail')
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  console.log('validateUsername')
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const FieldLevelValidation = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating, validateForm, validateField }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="username" validate={validateUsername} />
          {errors.username && touched.username && <div>{errors.username}</div>}


          {/** Trigger field-level validation
           imperatively */}
          <button type="button" onClick={() => validateField('username')}>
            Check Username
          </button>
          {/** Trigger form-level validation
           imperatively */}
          <button type="button" onClick={() => validateForm().then(() => console.log('blah'))}>
            Validate All
          </button>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);