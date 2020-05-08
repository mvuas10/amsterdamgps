// import express
const express = require("express");
const patients = require("./doctorPatient.json");
console.log(patients);

// create server
const app = express();

// 3000 is common
const port = 4000;

// confirmation function
function onListen() {
  console.log(`Listening on :${port}`);
}

app.get("/patients", (request, response) => {
  response.send(patients);
});
// start listening

app.listen(
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);
