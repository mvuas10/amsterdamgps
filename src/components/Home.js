import React from "react";
import Title from "./Title";
import ButtoInHome from "./ButtoInHome";
import TimeOfContact from "./TimeOfContact";

export default function Home() {
  return (
    <div>
      <Title title="Welcome to AMS GPs" />
      <TimeOfContact />
      <br />
      <ButtoInHome />
    </div>
  );
}
