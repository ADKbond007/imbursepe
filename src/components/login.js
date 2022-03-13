import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { LoginAction } from "../Action/Myaction";
// import store from "../store";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("Login Page Activated");
  }

  // logoutFunc = () => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       sessionStorage.setItem("loginVar", "false");
  //       window.location.href = "/login";

  //       console.log("Signout Success");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  loginFunc = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        this.props.loginSuccess();
        sessionStorage.setItem("loginVar", "true");
        sessionStorage.setItem("userId", user.uid);

        // window.location.href = "/landing";
        window.history.pushState({}, "", `/${user.uid}/landing`);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error message:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  componentDidMount = () => {
    sessionStorage.setItem("loginVar", "false");
  };
  myf = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* {this.props.isLoggedIn === true ? (
          <Navigate to="/landing" />
        ) : (
          <Navigate to="/login" />
        )} */}
        <h1>LOGIN PAGE</h1>
        <Button variant="primary" onClick={this.loginFunc}>
          Login
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    value: state.value,
    payload: state.payload,
  }; // state
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: () => dispatch(LoginAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
