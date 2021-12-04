import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import * as Yup from "yup";
import UserContext from "./context.js";

const CreateAccount = ({ loggedIn, setLoggedIn }) => {
  
  const ctx = useContext(UserContext);

  const CreateAccountForm = () => {
    const [first, setFirst] = React.useState(true);
    const [confMsg, setConfMsg] = React.useState("");

    function handleCreate(values) {
      const url = `/account/create/${values.name}/${values.email}/${values.password}/100`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
      })();
      setConfMsg("Account Created!");
      setTimeout(() => setConfMsg(""), 5000);
      setFirst(false);
      ctx.setCurrentUser(values.name);
      ctx.setCurrentEmail(values.email);
      ctx.setCurrentBalance(100);
      setLoggedIn(true);
    }

    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          handleCreate(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <Card
              bg="warning"
              text="dark"
              style={{
                width: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Card.Body>
                <Card.Title>Create Account</Card.Title>
                <Card.Subtitle>Sign up now and get $100!</Card.Subtitle>
                <br />
                <Card.Text>
                  <label htmlFor="name">Name</label>
                  <Field
                    id="name"
                    name="name"
                    className="form-control"
                    type="name"
                    placeholder="Enter Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                    style={{ color: "red" }}
                  />
                  <br />
                  <br />
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="Enter Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                    style={{ color: "red" }}
                  />
                  <br />
                  <br />
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Card.Text>
                {first && (
                  <Button
                    type="submit"
                    variant="primary"
                    className="btn btn-primary"
                    disabled={isSubmitting || !(isValid && dirty)}
                  >
                    Create Account
                  </Button>
                )}
                {!first && (
                  <Grid container item xs={12}>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        variant="primary"
                        className="btn btn-primary"
                        disabled={isSubmitting || !(isValid && dirty)}
                      >
                        Add Another Account
                      </Button>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <h5 style={{ color: "green" }}>{confMsg}</h5>
                    </Grid>
                  </Grid>
                )}
              </Card.Body>
            </Card>
          </Form>
        )}
      </Formik>
    );
  };

  if (ctx.currentUser === "") {
    return CreateAccountForm();
  } else {
    return <Redirect to="/deposit" />;
  }
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  name: Yup.string().required("Name is required"),
});

export default CreateAccount;
