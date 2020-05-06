import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <br />
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
          exact
          to="/"
        >
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
          to="/docSchedule"
        >
          Doctor Schedule
        </NavLink>{" "}
        {" | "}
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
          to="/patientSignup"
        >
          Patient Signup
        </NavLink>{" "}
        {" | "}
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
          to="/patientDatabase"
        >
          Patient Database
        </NavLink>
      </nav>
      <br />
      <hr />
    </div>
  );
}
