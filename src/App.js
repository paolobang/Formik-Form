import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import './App.css';
import { useFormik } from 'formik';

function App() {

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
       console.log('form:', values);
       alert("Login Successful");

    },
    validate : values => {
      let errors = {};
      if (!values.pswField) errors.pswError = 'Field required';

      if (!values.emailField) {
        errors.emailError = 'Field Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)
      ) {
        errors.emailError = 'Invalid email address';
      }
      return errors
    }
  });

  return (  

    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" typex="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <input id="pswField" typex="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div> : null}
        
        <button type="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
