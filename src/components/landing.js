import React from "react";
import { connect } from "react-redux";
import { LogoutAction, SetPath } from "../Action/Myaction";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Navbar from "./commons/navbar";
import session from "redux-persist/lib/storage/session";
import Features from "./pages/Features";

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
  // <div className="navbar-container">
  //         <Navbar userData={this.state.userData} />
  //       </div>
  //       <div className="main-content-container">
  //         <Route
  //           exact
  //           path=":userId/landing/features"
  //           element={<Features />}
  //         ></Route>
  //       </div>
  render() {
    let { currentPage: currentPage } = this.props;
    let PageToRender = () => {
      if (sessionStorage.getItem("currentPath") === "landing") {
        return <h1>Hello world</h1>;
      } else if (sessionStorage.getItem("currentPath") === "features") {
        return <Features />;
      }
    };
    return (
      <div className="navbar-container">
        <Navbar userData={this.state.userData} path={currentPage} />
        {PageToRender()}
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
  return {
    logoutSuccess: ({}) => dispatch(LogoutAction({})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
