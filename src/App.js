import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  // Hint: Define the validation schema using Yup to validate email and password
  // Hint: Email should be a valid email format and required
  // Hint: Password should be at least 6 characters and required
  
  const validationSchema = Yup.object({
    // Add your Yup validation here
  });

  const initialValues = {
    // Hint: Set initial values for email and password fields (empty strings to start with)
  };

  // Hint: Create an onSubmit function that logs form values to the console when submitted
 

  return (
    <div>
      <h1>Simple Login Form</h1>
      <Formik
        // Hint: Pass the initialValues, validationSchema, and onSubmit function here
      >
        {() => (
          <Form>
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              {/* Hint: Display ErrorMessage for email if validation fails */}
             
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              {/* Add the field type password  */}
              {/* Hint: Display ErrorMessage for password if validation fails */}
            </div>

           
            <button type="submit">Submit</button> 
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
