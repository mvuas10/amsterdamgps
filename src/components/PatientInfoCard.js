import React from "react";

export default function PatientInfoCard(props) {
  return (
    <div>
      Name: {props.firstName} {props.lastName} <br />
      ID: {props.id} <br />
      Date of birth: {props.dateOfBirth}
    </div>
  );
}
