import React, { useEffect, useState } from "react";
import Title from "./Title";
import PatientInfoCard from "./PatientInfoCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientDatabase() {
  //manage patients here
  //Lift state
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

  const sortPatientsLastName = patients.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  return (
    <div>
      <Title title="Patient Database" />
      {sortPatientsLastName.map((patient) => {
        // console.log(
        //   "Patient test:",
        //   patient.firstName,
        //   patient.lastName,
        //   patient.id,
        //   patient.dateOfBirth
        // );
        return (
          <div key={patient.firstName}>
            <PatientInfoCard
              firstName={patient.firstName}
              lastName={patient.lastName}
              id={patient.id}
              dateOfBirth={patient.dateOfBirth}
            />
            <Link to={`/patientDetails/${patient.id}`}>
              <button>Show details</button>
            </Link>
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
}
