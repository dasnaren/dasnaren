import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import validationSchema from "./validationSchema";
import ErrorAlert from "./ErrorAlert";

//import "./styles.css"; // Import the CSS file

const Registration = () => {
  const [formData, setFormData] = useState({});

  const initialValues = {
    fname: "",
    country: "",
    password: "",
    gender: "",
    hobby: [],
    address: "",
  };

  return (
    <>
      <div className="form-container">
        <div className="form-box">
          <div className="form-header">Registration Form</div>
          <div className="text-center">{JSON.stringify(formData)}</div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setFormData(values);
            }}
          >
            <Form className="form-field">
              <div>
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <Field type="text" id="fname" name="fname" className="form-input" placeholder="Enter your first name" />
                <ErrorAlert name="fname" />
              </div>

              <div>
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <Field as="select" id="country" name="country" className="form-input">
                  <option value="">Select</option>
                  <option value="INDIA">INDIA</option>
                  <option value="USA">USA</option>
                </Field>
                <ErrorAlert name="country" />
              </div>

              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field type="password" id="password" name="password" className="form-input" placeholder="Enter your password" />
                <ErrorAlert name="password" />
              </div>

              <div>
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <div className="gender-container">
                  <div className="gender-radio-item">
                    <Field type="radio" value="male" name="gender" className="gender-radio-input gender-radio" />
                    <label htmlFor="male" className="gender-label">
                      Male
                    </label>
                  </div>

                  <div className="gender-radio-item">
                    <Field type="radio" value="female" name="gender" className="gender-radio-input gender-radio" />
                    <label htmlFor="female" className="gender-label">
                      Female
                    </label>
                  </div>
                  <ErrorAlert name="gender" />
                </div>
              </div>

              <div>
                <label htmlFor="hobby" className="form-label">
                  Hobby
                </label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <Field type="checkbox" value="writing" name="hobby" className="checkbox-input" />
                    <label htmlFor="writing" className="checkbox-label">
                      Writing
                    </label>
                  </div>
                  <div className="checkbox-item">
                    <Field type="checkbox" value="playing" name="hobby" className="checkbox-input" />
                    <label htmlFor="playing" className="checkbox-label">
                      Playing
                    </label>
                  </div>
                  <div className="checkbox-item">
                    <Field type="checkbox" value="singing" name="hobby" className="checkbox-input" />
                    <label htmlFor="singing" className="checkbox-label">
                      Singing
                    </label>
                  </div>
                  <ErrorAlert name="hobby" />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field as="textarea" name="address" className="form-input" placeholder="Enter your address" />
                <ErrorAlert name="address" />
              </div>

              <div className="mt-4">
                <button type="submit" className="form-submit-btn">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Registration;
