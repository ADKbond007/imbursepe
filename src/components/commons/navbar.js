import { render } from "@testing-library/react";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { getAuth, signOut } from "firebase/auth";
class CreateNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  logoutFunc = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signout Success");
        // this.props.logoutSuccess({});
        sessionStorage.setItem("loginVar", "false");
        window.location.href = "/login";
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href={homeUrl}>Navbar</Navbar.Brand */}

          <Nav className="me-auto">
            <Nav.Link>{this.props.userData.displayName}</Nav.Link>
            <Nav.Link>{this.props.userData.email}</Nav.Link>
            <Nav.Link>{this.props.userData.photoUrl}</Nav.Link>
            <img
              src={this.props.userData.photoURL}
              alt=""
              style={{ height: "100px", width: "100px" }}
            />
          </Nav>
          <Button variant="danger" onClick={this.logoutFunc}>
            Logout
          </Button>
        </Container>
      </Navbar>
    );
  }
}

export default CreateNavbar;
