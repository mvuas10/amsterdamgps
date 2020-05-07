import React, { useState } from "react";
import Title from "./Title";
import PatientInfoCard from "./PatientInfoCard";

export default function PatientDatabase() {
  return (
    <div>
      <Title title="Patient Database" />
      <PatientInfoCard />
    </div>
  );
}
