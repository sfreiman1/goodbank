import React from "react";

import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import bankImage from "../images/bank.jpeg";

import Login from "./login.js";

const Home = (props) => {

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="center"
      style={{ margin: "20px" }}
    >
      <Grid item xs={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bankImage} />
          <Card.Body>
            <Card.Title>Welcome to Good Bank</Card.Title>
            <Card.Text>You can move around using the navigation bar.</Card.Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Login loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      </Grid>
    </Grid>
  );
};

export default Home;
