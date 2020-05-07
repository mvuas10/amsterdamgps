import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientInfoCard(props) {
  //   const [patients, setPatients] = useState([]);

  //   useEffect(() => {
  //     async function fetchPatients() {
  //       const response = await axios.get(
  //         "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
  //       );

  //       console.log("Check data:", response.data);
  //       setPatients(response.data);
  //     }
  //     fetchPatients();
  //   }, []);

  //   console.log("Check patients:", patients);

  return (
    <div>
      Name: {props.firstName} {props.lastName} <br />
      ID: {props.id} <br />
      Date of birth: {props.dateOfBirth}
    </div>
  );
}
