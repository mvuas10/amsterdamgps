import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import DocSchedule from "./components/DocSchedule";
import PatientSignup from "./components/PatientSignup";
import PatientDatabase from "./components/PatientDatabase";
import PatientDetails from "./components/PatientDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/docSchedule" component={DocSchedule} />
        <Route exact path="/patientSignup" component={PatientSignup} />
        <Route exact path="/patientDatabase" component={PatientDatabase} />
        <Route path="/patientDetails/:id" component={PatientDetails} />
      </Switch>
    </div>
  );
}

export default App;
