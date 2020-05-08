import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientInfoCard(props) {
  return (
    <div>
      Name: {props.firstName} {props.lastName} <br />
      ID: {props.id} <br />
      Date of birth: {props.dateOfBirth}
    </div>
  );
}
