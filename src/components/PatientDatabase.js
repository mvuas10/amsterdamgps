import React, { useEffect, useState } from "react";
import Title from "./Title";
import PatientInfoCard from "./PatientInfoCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientDatabase() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [sortBy, setSortBy] = useState("all");

  useEffect(() => {
    async function fetchDoctors() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      // console.log("Check doctors data:", response.data);
      setDoctors(response.data);
    }
    fetchDoctors();
  }, []);

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );

      // console.log("Check patients data:", response.data);
      setPatients(response.data);
    }
    fetchPatients();
  }, []);

  const sortPatientsLastName = patients.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  const filterPatientByDoctorID = sortPatientsLastName.filter((patientCard) => {
    // console.log("What is my patient Card?", patientCard);
    // console.log("What is my patientCard.doctorId?", patientCard.doctorId);
    // console.log("What is sortBy?", sortBy);
    if (sortBy === "all") {
      return patientCard;
    } else if (sortBy == patientCard.doctorId) {
      return patientCard;
    }
  });

  return (
    <div>
      <Title title="Patient Database" />
      <label>Doctor</label>
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="all">All patients</option>
        {doctors.map((doctor) => {
          return (
            <option key={doctor.id} value={doctor.id}>
              {doctor.doctor}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      {filterPatientByDoctorID.map((patient) => {
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
