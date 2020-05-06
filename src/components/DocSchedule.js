import React, { useEffect, useState } from "react";
import Title from "./Title";
import TimeOfContact from "./TimeOfContact";
import axios from "axios";

export default function DocSchedule() {
  const [availabilities, setAvailability] = useState([]);

  useEffect(() => {
    async function fetchAvailability() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log("Check availability: ", response.data);
      setAvailability(response.data);
    }
    fetchAvailability();
  }, []);
  return (
    <div>
      <Title title="Who is on duty?" />
      {availabilities.map((availability, index) => {
        console.log("Check availability: ", availability);
        return (
          <div key={index}>
            <table>
              <tr>
                <th>Doctor</th>
                <th>Availability</th>
              </tr>
              <tr>
                <td>{availability.doctor}</td>{" "}
                <td>{availability.onDuty ? "on Duty" : "off Duty"}</td>
              </tr>
            </table>
          </div>
        );
      })}
      <br />
      <TimeOfContact />
    </div>
  );
}
