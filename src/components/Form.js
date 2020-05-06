import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Form() {
  const [newFirstN, setFirstN] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  console.log("Check firstName: ", newFirstN);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newFirstN);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          value={newFirstN}
          onChange={(event) => setFirstN(event.target.value)}
        />
        <br />
        <label>Last Name </label>
        <input onChange={(event) => console.log(event.target.value)} /> <br />
        <label>Email </label>
        <input onChange={(event) => console.log(event.target.value)} /> <br />
        <label>Phone </label>
        <input onChange={(event) => console.log(event.target.value)} />
        <br />
        <label>Gender</label>
        <select onChange={(event) => console.log(event.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Date of birth</label>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
