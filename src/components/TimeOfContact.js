import React, { useState } from "react";
import moment from "moment";

export default function TimeOfContact() {
  // const [time, setTime] = useState("open");
  // console.log("Check time: ", time);

  // const time = moment().utcOffset("+01:55").format("hh:mm a");
  // console.log("Check time: ", time);

  // if (time > "08:00 a" && time < "16:59 a") {
  //   console.log("open");
  // }
  // console.log("close");

  return (
    <div>
      We are: <div style={{ fontWeight: "bold" }}>open</div> <br /> To make an
      appointment <br /> <br /> call: 020 555 555
    </div>
  );
}
