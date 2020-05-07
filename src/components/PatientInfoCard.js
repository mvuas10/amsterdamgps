import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientInfoCard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );

      console.log("Check data:", response.data);
      setPatients(response.data);
    }
    fetchPatients();
  }, []);

  console.log("Check patients:", patients);
  return (
    <div>
      {patients.map((patient) => {
        console.log(patient);
        return (
          <div key={patient.firstName}>
            <h4>
              Name: {patient.firstName} {patient.lastName}
              <br />
              ID: {patient.id}
              <br />
              Date of birth: {patient.dateOfBirth}
            </h4>
            <Link>
              <button>Show details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
