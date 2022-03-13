import React from "react";
import { connect } from "react-redux";
import { LogoutAction } from "../Action/Myaction";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Navbar from "./commons/navbar";
import session from "redux-persist/lib/storage/session";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
    console.log("Landing Page Activated");
  }
  componentWillMount = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        this.setState({ userData: user });
      } else {
        console.log("no user LOADED");
      }
    });
  };
  callLoger = () => {
    console.log("Logger");
  };

  render() {
    return (
      <div>
        {/* <Button onClick={this.callLoger}>Lander</Button> */}
        <Navbar userData={this.state.userData} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("THIS IS THE STATE FROM LANDING", state);
  return {
    value: state.value,
  }; // state
};
const mapDispatchToProps = (dispatch) => {
  console.log("ACTIONS LOADED");
  return {
    logoutSuccess: ({}) => dispatch(LogoutAction({})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
