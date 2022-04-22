import { Field, Form, Formik, ErrorMessage } from "formik";
import "./Form.scss";
import React from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import bmw2 from "../../Assets/bmw2.svg";

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
    <div className="mainbox ">
      <div className="leftbox">
        <div>
          <p>
            <b>Car Details</b>
          </p>
          <br />
          <img src={bmw2} alt="" />
          <h6>BMW X5</h6>
          <p>
            <b>Fuel Type</b>
          </p>
          <p>Petrol and Deisel</p>

          <p>
            <b>Engine</b>
          </p>
          <p>2993 to 2998 C</p>
          <Link to="/allcars">View Home</Link>
        </div>
      </div>
      <div className="rightbox">
        <p>
          <b>Booking Details</b>
        </p>

        <h1 className="booktext">Booking Details</h1>

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
