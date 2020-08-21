import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { isAuthenticated } from "../apiCalls/authAPI";
import { createBlog } from "../apiCalls/blogAPI";

const initialValues = {
  title: "",
  author: {},
  body: "",
};

const { user, token } = isAuthenticated();

const onSubmit = (values) => {
  values.author.id = user._id;
  values.author.name = user.name;
  console.log(values);
  createBlog(user._id, token, values).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log("Blog Added");
    }
  });
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required!"),
  body: Yup.string().required("Required!"),
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
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" id="title" className="validate" />
              <ErrorMessage className="red-text" name="title" component="div" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="body">Body</label>
              <Field
                type="body"
                name="body"
                id="body"
                component="textarea"
                className="materialize-textarea"
              />
              <ErrorMessage className="red-text" name="body" component="div" />
            </div>
          </div>

          <div className="center">
            <button
              className="waves-effect waves-light btn purple darken-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

const BlogAdd = () => {
  return <div className="container">{form()}</div>;
};

export default BlogAdd;
