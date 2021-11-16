import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import bankImage from "../images/bank.jpeg";
import UserContext from "./context.js";

const NavBar = (props) => {
  const ctx = useContext(UserContext);
  const handleLogOut = () => {
    ctx.setCurrentUser("");
    props.setLoggedIn(false);
    return <Redirect to="/" />;
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#/home/">
          <img
            src={bankImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Bad Bank Logo"
          />{" "}
          Good Bank
        </Navbar.Brand>
        <Nav>
          {ctx.currentUser === "" && (
            <Nav.Link href="#/createaccount/">Create Account</Nav.Link>
          )}
          {ctx.currentUser !== "admin" && ctx.currentUser !== "" && (
            <Nav.Link href="#/deposit/" disabled={!props.loggedIn}>
              Deposit
            </Nav.Link>
          )}
          {ctx.currentUser !== "admin" && ctx.currentUser !== "" && (
            <Nav.Link href="#/withdraw/" disabled={!props.loggedIn}>
              Withdraw
            </Nav.Link>
          )}
          {ctx.currentUser === "admin" && ctx.currentUser !== "" && (
            <Nav.Link href="#/alldata/" disabled={!props.loggedIn}>
              All Data
            </Nav.Link>
          )}
          {ctx.currentUser !== "" && (
            <NavDropdown title={ctx.currentUser} id="basic-nav-dropdown">
              <NavDropdown.Item onSelect={handleLogOut}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>{" "}
      </Container>
    </Navbar>
  );
};

export default NavBar;
