import logo from "./logo.svg";
import "./App.css";
import React from "react";
import fire from "./config/fire";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/login";
import Landing from "./components/landing";
import { connect } from "react-redux";
import { LoginAction } from "./Action/Myaction";
import { loginSuccess } from "./Reducer/Reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor(props) {
    console.log("APP CALLED APP CALLED");
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>TITLE PAGE</h1>
          <Routes>
            <Route
              exact
              path="/"
              element={
                sessionStorage.getItem("loginVar") === "true" ? (
                  <Navigate to="/login" />
                ) : (
                  <Navigate to="/landing" />
                )
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={
                sessionStorage.getItem("loginVar") === "true" ? (
                  (console.log("Lginvar", sessionStorage.getItem("loginVar")),
                  (<Navigate to="/landing" />))
                ) : (
                  <Login />
                )
              }
            ></Route>
            <Route
              exact
              path="/landing"
              element={
                sessionStorage.getItem("loginVar") === "true" ? (
                  <Landing />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("THIS IS THE STATE FROM APP", state);
  return {
    value: state.value,
  }; // state
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: () => dispatch(LoginAction("hello")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
