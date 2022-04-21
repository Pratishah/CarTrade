import { Field, Form, Formik, ErrorMessage } from "formik";
import "./Form.scss";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const FormValidation = () => {
  const defaultvalue = { Name: "", Mob: "", city: "", accept: [] };
  const submitHandler = (values: any) => {
    console.log(values);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Success";
    navigate(path);
  };

  const validationSchema = yup.object().shape({
    Name: yup.string().required("please enter your name"),
    city: yup.string().required("city is required"),
    Mob: yup
      .string()
      .required("Mob field is Required")
      .min(10)
      .max(12)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    accept: yup.boolean().required("please accept trms and conditions"),
  });
  return (
    <div className="formbox">
      <h1 className="booktext">Booking Details</h1>
      <div className="container form-group">
        <Formik
          initialValues={defaultvalue}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          <Form>
            <div>
              <label className="form-control">Name:</label>
              <Field
                type="text"
                className="form-control"
                placeholder="enter your name"
                name="Name"
              ></Field>
            </div>

            <p className="text-danger">
              <ErrorMessage name="Name" />
            </p>

            <div>
              <label className="form-control">Mob</label>
              <Field
                type="text"
                className="form-control"
                placeholder="enter your Contact No."
                name="Mob"
              ></Field>
            </div>

            <p className="text-danger">
              <ErrorMessage name="Mob" />
            </p>

            <div>
              <label className="form-control">City:</label>
              <Field
                component="select"
                name="city"
                placeholder="select city "
                className="form-control"
              >
                <option value="" disabled>
                  Please Select your city
                </option>
                <option value="bangalore">Bangalore</option>
                <option value="hyd">hydrabad</option>
                <option value="chennai">Chennai</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Lukhnow">Lukhnow</option>
              </Field>
              <p className="text-danger">
                <ErrorMessage name="city" />
              </p>
            </div>

            <div>
              <label className="form-control">
                Accept Terms and conditions
              </label>
              <Field
                type="checkbox"
                placeholder="accept terms and condition"
                name="accept"
                value="1"
              ></Field>
            </div>

            <p className="text-danger">
              <ErrorMessage name="accept" />
            </p>

            <button onClick={routeChange} className="submit" type="submit">
              submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormValidation;
