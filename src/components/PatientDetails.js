import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PatientDetails() {
  const [patient, setPatient] = useState({});
  const routeParameters = useParams();
  //   console.log("Check routeParameters:", routeParameters);

  useEffect(() => {
    async function fetchPatientByID(id) {
      //   console.log("DO I have any ID?", id);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
      );
      console.log("Check response:", response.data);
      setPatient(response.data);
    }
    fetchPatientByID(routeParameters.id);
  }, []);

  //   for (let key in prescriptions) console.log(key, prescriptions[key]);

  return (
    <div>
      <h1>
        {patient.firstName} {patient.lastName}
      </h1>
      <br />
      ID: {patient.id}
      <br />
      Data of Birth: {patient.dateOfBirth}
      <br />
      Gender: {patient.gender}
      <br />
      <br />
      Contact details:
      <br />
      <li>Email: {patient.email}</li>
      <li>Phone number: {patient.phoneNumber}</li>
      <br />
      Prescriptions:
      <br />
      {patient.prescriptions &&
        patient.prescriptions.map((prescription) => {
          return <li key={prescription}>{prescription}</li>;
        })}
    </div>
  );
}
