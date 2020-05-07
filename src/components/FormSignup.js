import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { render } from "react-dom";
import { Message, Form } from "semantic-ui-react";

export default function FormSignup() {
  const [newFirstN, setFirstN] = useState("");
  const [newLastN, setLastN] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newGender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // constructor() {
  //   super()
  //   this.state= {
  //     formError: false
  //   }

  //   console.log("Check gender:", newGender);
  //   console.log("Check lastName: ", newLastN);
  //   console.log("Check phone: ", newPhone);
  //   console.log("Check email: ", newEmail);
  //   console.log("Check date:", selectedDate);
  //   console.log("Check firstName: ", newFirstN);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      newFirstN,
      newLastN,
      newEmail,
      newPhone,
      newGender,
      selectedDate,
    });
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
        <input
          value={newLastN}
          onChange={(event) => setLastN(event.target.value)}
        />{" "}
        <br />
        <label>Email </label>
        <input
          value={newEmail}
          onChange={(event) => setEmail(event.target.value)}
        />{" "}
        <br />
        <label>Phone </label>
        <input
          value={newPhone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <label>Gender</label>
        <select
          value={newGender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Date of birth</label>
        <div>
          <DatePicker
            value={selectedDate}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyy"
          />
        </div>
        <br />
        <br />
        <input type="submit" value="Submit" />
        {/* {!this.state.formError ? (
          <Message
            positive
            header="Your user registration was successful"
            content="You may now log-in with the username you have chosen"
          />
        ) : (
          <Message
            negative
            header="Missing fields!"
            list={["All fields must be filled."]}
          />
        )} */}
      </form>
    </div>
  );
}