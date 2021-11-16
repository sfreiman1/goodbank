import React from "react";
import { Button, Card } from "react-bootstrap";
import UserContext from "./context.js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NumberFormat from "react-number-format";
import Grid from "@material-ui/core/Grid";

const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const [confMsg, setConfMsg] = React.useState("");
  const setTextColor = () => {
    return ctx.currentBalance <= 0 ? "red" : "green";
  };

  function onFormSubmit(values) {
    const depositAmount = parseFloat(values.amt);
    ctx.setCurrentBalance(ctx.currentBalance + depositAmount);

    const url = `/account/update/${ctx.currentEmail}/${depositAmount}`;

    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          console.log("JSON:", data);
          setConfMsg("Balance Updated!");
        } catch (err) {
          console.log("err:", text);
          setConfMsg("Deposit Failed!");
        }
      });

    setTimeout(() => setConfMsg(""), 5000);
  }

  return (
    <>
      <Formik
        initialValues={{
          amt: "$0.00",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          onFormSubmit(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <h2
              style={{
                color: setTextColor(),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Balance:
              <NumberFormat
                value={ctx.currentBalance}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={"2"}
                fixedDecimalScale={true}
                prefix={"  $"}
                style={{ color: setTextColor() }}
              />
            </h2>
            <Card
              bg="success"
              text="light"
              style={{
                width: "18rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Card.Body>
                <Card.Title>Deposit</Card.Title>

                <Card.Text>Deposit Amount :</Card.Text>
                <Field
                  id="amt"
                  type="number"
                  name="amt"
                  step="any"
                  placeholder="$0.00"
                />
                <div className="row justify-content-center">
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ margin: "20px" }}
                    disabled={isSubmitting || !(isValid && dirty)}
                  >
                    Deposit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Form>
        )}
      </Formik>
      <Grid container item xs={6} justifyContent="flex-end" alignItems="center">
        <h5 style={{ color: "green" }}>{confMsg}</h5>
      </Grid>
    </>
  );
};

const validationSchema = Yup.object().shape({
  amt: Yup.number().test(
    "is positive",
    "You must enter a positive number",
    (value) => value > 0
  ),
});

export default Deposit;
