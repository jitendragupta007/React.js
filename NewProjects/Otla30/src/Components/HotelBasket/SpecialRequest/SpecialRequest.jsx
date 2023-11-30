import React, { useState, useEffect } from "react";

const SpecialRequest = ({ textBox, setTextBox }) => {
  const [text, setText] = useState("");

  console.log("textbox", textBox)

  useEffect(() => {
    setTextBox(text);
  }, [text]);

  return (
    <div className="Passenger_basic_details">
      <div className="paxheading">Special Request</div>
      <div className="paxinput_box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Special Request"
        ></textarea>
      </div>
    </div>
  );
};

export default SpecialRequest;
