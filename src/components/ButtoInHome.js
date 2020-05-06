import React from "react";
import { Link } from "react-router-dom";

export default function ButtoInHome() {
  return (
    <div>
      <Link to="/docSchedule">
        <button>Who is on duty?</button>
      </Link>
      <br />
      <br />
      <Link to="/patientSignup">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
