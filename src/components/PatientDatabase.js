import React, { useEffect, useState } from "react";
import Title from "./Title";
import PatientInfoCard from "./PatientInfoCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientDatabase() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [sortBy, setSortBy] = useState("all"); //Only when the page is loaded the 1st time

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

  // console.log("Check patients:", patients);
  // console.log("Check sortBy:", sortBy);

  const sortPatientsLastName = patients.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  const filterPatientByDoctorID = sortPatientsLastName.filter((patientCard) => {
    //Make the filter all
    // console.log("What is the patient card?", patientCard);
    // console.log("What is my doctor ID?", patientCard.doctorId);
    // console.log(
    //   "Why my console.log doesn't work?",
    //   sortBy,
    //   patientCard.doctorId,
    //   sortBy == patientCard.doctorId
    // );
    if (sortBy === "all") {
      return patientCard; //Run through all the patients last name
    } else if (sortBy == patientCard.doctorId) {
      // console.log("SortBy matches DoctorID on patientCard");
      return patientCard;
    }
  });
  console.log("SortBy:", sortBy); //Holds the value

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
          // console.log("Check doctor dropdown:", doctor.doctor, doctor.id); //Drop down works
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
