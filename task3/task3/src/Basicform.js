import * as React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';



const FormValidationSchema= yup.object({
  email: yup.string().required("enter valid email").min(5,"type correct password")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern not match"),
  password: yup.string().required("enter valid password").min(5).max(12, "reduce length"),
})
export function Basicform() {
  const {handleChange,handleSubmit,handleBlur,touched,values,errors}= useFormik({
    initialValues: {email:"", password:"" },
    validationSchema:FormValidationSchema,
    onSubmit : (values)=>{
console.log("formik values:",values);
    }
  })
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input 
      name="email"
      type="email" 
      placeholdrer="Enter email" 
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {errors.email&& touched.email ? errors.email: ""}
      <input 
      name="password"
      type="password" 
      placeholdrer="Enter password" 
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {errors.password && touched.password ? errors.password: ""}
      <button type="submit">Submit</button>

    </form>
  );
}
