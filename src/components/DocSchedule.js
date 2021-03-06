import React, { useEffect, useState } from "react";
import Title from "./Title";
import TimeOfContact from "./TimeOfContact";
import axios from "axios";

export default function DocSchedule() {
  const [availabilities, setAvailability] = useState([]);
  const [appStatus, setAppStatus] = useState("loading");

  useEffect(() => {
    async function fetchAvailability() {
      setAppStatus("Loading...");
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log("Check availability: ", response.data);
      setAvailability(response.data);
      setAppStatus("done");
    }
    fetchAvailability();
  }, []);

  console.log("status check: ", appStatus);
  if (appStatus === "Loading...")
    return <h1>Loading availability. Please wait ...</h1>;

  return (
    <div>
      <Title title="Who is on duty?" />
      <table>
        <tr>
          <th>Doctor</th>
          <th>Availability</th>
        </tr>
        {availabilities.map((availability) => {
          console.log("Check availability: ", availability);
          return (
            <tr key={availability.doctor}>
              <td>{availability.doctor}</td>{" "}
              <td>{availability.onDuty ? "on Duty" : "off Duty"}</td>
            </tr>
          );
        })}
      </table>
      <br />
      <TimeOfContact />
    </div>
  );
}
