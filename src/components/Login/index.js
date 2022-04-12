import React from "react";
import { Formik, Form} from "formik"
import FormField from "../Signup/TextField";
import * as Yup from "yup";
import "./login.css";

export default function Login(){
    const validate = Yup.object({
        email: Yup.string().email("Email is invalid").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
      });
    return(
        <Formik initialValues={{
email:"",
password:""
        }} 
        onSubmit={(values)=>{console.log(values);}}
      validationSchema={validate}
        >
            {(formik) =>(
                <Form>
                <div className="login-container" >
                <div className="login-left" >
                    <h1>Login</h1>
                    <FormField label="E-mail" name="email" type="text " ></FormField>
                    <FormField label="Password" name="password" type="password " />
                    <button className="login-btn" type="submit" >Login</button>
                </div>
                <div className="login-right" >
                <img className="login-img" src="./logo512.png" alt="logo" />
                </div>
            </div>
                </Form>
            )}
        </Formik>
    );
}

