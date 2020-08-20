import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, authenticate } from "../apiCalls/authAPI";

const Login = ({ history }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // console.log(values);
    login(values).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        authenticate(data, () => {
          console.log("User logged in");
          history.push("/profile");
        });
      }
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string().required("Required!"),
  });

  const form = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="row">
          <Form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="validate"
                />
                <ErrorMessage
                  className="red-text"
                  name="email"
                  component="div"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="validate"
                />
                <ErrorMessage
                  className="red-text"
                  name="password"
                  component="div"
                />
              </div>
            </div>

            <div className="center">
              <button
                className="waves-effect waves-light btn purple darken-3"
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    );
  };

  return <div className="container">{form()}</div>;
};

export default Login;
