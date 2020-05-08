import React from "react";

export default function TimeOfContact() {
  const hours = new Date().getHours();
  const timing = hours >= 8 && hours < 17 ? "open" : "close";

  return (
    <div>
      We are: <div style={{ fontWeight: "bold" }}>{timing}</div> <br /> To make
      an appointment <br /> <br /> call: 020 555 555
    </div>
  );
}
