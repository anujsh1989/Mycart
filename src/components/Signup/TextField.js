import React from "react";
import "./textfield.css";
import { ErrorMessage,useField } from "formik";

export default function FormField({ label, ...props}){
    const [field,meta] = useField(props);
    return(
        <div className="textfield-wrapper" >
            <label  className="label" htmlFor={field.name} >{label}</label>
            <input className={`input ${meta.touched && meta.error && 'input-error'}`} autoComplete="off"  {...field}{...props} >
            </input>
            <ErrorMessage  component='div' name={field.name}  className="error" />
        </div>
    );

}