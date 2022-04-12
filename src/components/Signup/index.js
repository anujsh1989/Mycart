import React from "react";
import { Formik, Form} from "formik";
import "./signup.css";
import FormField from "./TextField";

import * as Yup from "yup";

export default function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 Characters or Less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 Characters or Less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    gender:Yup.string().required("Required"),
    dateofbirth:Yup.date().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Required"),
  });

  
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender:"",
        dateofbirth:"",
      }}
      onSubmit={(values)=>{console.log(values);}}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="signup-wrapper">
          <div className="signup-left">
            <h1 className="signup-title">Signup</h1>
            {/* {console.log(formik.values)} */}
            <Form>
              <FormField label="First Name" name="firstName" type="text " />
              <FormField label="Last Name" name="lastName" type="text " />
              <FormField label="E-mail" name="email" type="text " />
              <label>Gender</label>
              <div className="gender-box"  >
              <FormField className="gender-option" label="Male" name="gender" value="male" type="radio" ></FormField>
              <FormField  className="gender-option" label="Female" name="gender" value="female" type="radio" ></FormField>
              </div>
              <FormField  label="Date Of Birth" name="dateofbirth" type="date" ></FormField>
              <FormField label="Password" name="password" type="password " />
              <FormField
                label="Confirm Password"
                name="confirmPassword"
                type="password "
              />
              <label>Notes</label>
              <FormField name="text" as="textarea"></FormField>
              <br></br>
              <button className="register-btn" type="submit" >Register</button>
              <button className="reset-btn">Reset</button>
            </Form>
          </div>
          <div className="signup-right">
            <img className="signup-img" src="./logo512.png" alt="logo" />
          </div>
        </div>
      )}
    </Formik>
  );
}
