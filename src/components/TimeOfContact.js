import React, { useState } from "react";
import moment from "moment";

export default function TimeOfContact() {
  // const [time, setTime] = useState("open");
  // console.log("Check time: ", time);

  // const time = moment().utcOffset("+01:55").format("hh:mm a");
  const hours = new Date().getHours();

  // console.log("Check time:", hours);

  // const timing = () => {
  //   if (hours >= 8 && hours < 12) {
  //     return "open";
  //   } else {
  //     return "close";
  //   }
  // };

  const timing = hours >= 8 && hours < 17 ? "open" : "close";

  return (
    <div>
      We are: <div style={{ fontWeight: "bold" }}>{timing}</div> <br /> To make
      an appointment <br /> <br /> call: 020 555 555
    </div>
  );
}
