import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginSuccess } from "../Reducer/myReducer";
import { LoginAction } from "../Action/Myaction";
// import store from "../store";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("Login Page Activated");
  }

  logoutFunc = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signout Success");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  loginFunc = () => {
    console.log("HEllo i am here");
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
        console.log("user", user);
        this.props.loginSuccess();
        window.location.href = "/landing";
      })
      .catch((error) => {
        console.log("HELOOOOOOOOO");
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  componentDidMount() {}
  myf = () => {
    console.log("FUNCTION", this.props.isLoggedIn);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="primary" onClick={this.loginFunc}>
          Login
        </Button>
        <Button variant="secondary" onClick={this.logoutFunc}>
          Logout
        </Button>
        <Button variant="secondary" onClick={this.myf}>
          SHOW
        </Button>
        {this.props.isLoggedIn}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    isLoggedIn: state.isLoggedIn,
    value: state.value,
  }; // state
};
const mapDispatchToProps = (dispatch) => {
  console.log("Dispatch", dispatch);
  return {
    loginSuccess: () => dispatch(LoginAction("hello")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
