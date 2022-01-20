import logo from "./logo.svg";
import "./App.css";
import React from "react";
import fire from "./config/fire";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Landing from "./components/landing";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>HELLO THIS IS THE OPENING PAGE</h1>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/landing" element={<Landing />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
