import React from "react";
import { connect } from "react-redux";
import { LoginAction, LogoutAction } from "../Action/Myaction";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    console.log("Landing Page Activated");
  }
  componentDidMount = () => {};
  callLoger = () => {
    const user = getAuth().currentUser.displayName;
    console.log("USER", user);
  };
  logoutFunc = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signout Success");
        this.props.logoutSuccess();
        sessionStorage.setItem("loginVar", "false");
        window.location.href = "/login";
      })
      .catch((error) => {
        // An error happened.
      });
  };
  render() {
    return (
      <div>
        <h1>Hello I am landing</h1>
        <Button onClick={this.callLoger}>Lander</Button>
        <Button variant="secondary" onClick={this.logoutFunc}>
          Logout
        </Button>
      </div>
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
    loginSuccess: () => dispatch(LoginAction("login")),
    logoutSuccess: () => dispatch(LogoutAction("logout")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
