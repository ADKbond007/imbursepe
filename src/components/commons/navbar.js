import { render } from "@testing-library/react";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import clsx from "clsx";

import { getAuth, signOut } from "firebase/auth";
import "../../scss/m-navbar.scss";
import { SetPath } from "../../Action/Myaction";
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
  pathHandler = (toPathName) => {
    sessionStorage.setItem("currentPath", toPathName);
    window.location.pathname = `/${this.props.userData.uid}/${toPathName}`;
  };

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href={homeUrl}>Navbar</Navbar.Brand */}
          <Nav className="me-auto">
            <Nav.Link>
              <Button
                variant="primary navbar-btn"
                onClick={() => this.pathHandler("landing")}
                className={clsx(
                  sessionStorage.getItem("currentPath") === "landing"
                    ? ""
                    : "btn-navbar"
                )}
                disabled={sessionStorage.getItem("currentPath") === "landing"}
              >
                Homepage
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="primary navbar-btn"
                onClick={() => this.pathHandler("features")}
                className={clsx(
                  sessionStorage.getItem("currentPath") === "features"
                    ? ""
                    : "btn-navbar"
                )}
                disabled={sessionStorage.getItem("currentPath") === "features"}
              >
                Features
              </Button>
            </Nav.Link>
            {/* {sessionStorage.getItem("currentPath")} */}
            <Nav.Link>{this.props.userData.email}</Nav.Link>

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
const mapStateToProps = (state) => {
  console.log("THIS IS THE STATE FROM LANDING", state);
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateNavbar);
