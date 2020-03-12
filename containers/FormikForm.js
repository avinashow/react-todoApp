import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema = {Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(7, 'Must be 7 characters or more')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(Props) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        } = Props;
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={values.email}
            />
            <ErrorMessage name="email"/>
            <input
              type="password"
              name="password"
              value={values.password}
            />
            <ErrorMessage name="password"/>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default FormikForm;