import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <br />
        <Link to="/">Home</Link> {" | "}
        <Link to="/docSchedule">Doctor Schedule</Link> {" | "}
        <Link to="/patientSignup">Patient Signup</Link> {" | "}
        <Link to="/patientDatabase">Patient Database</Link>
      </nav>
      <br />
      <hr />
    </div>
  );
}
