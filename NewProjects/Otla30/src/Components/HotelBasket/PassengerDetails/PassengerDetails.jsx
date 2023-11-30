import React, { useState, useEffect } from "react";
import InputDiv from "../../Base/Input/InputDiv";

const PassengerDetails = ({ contactDetails, setContactDetails }) => {
  console.log("details", contactDetails);
  const [countryCode, setCountryCode] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");


  console.log(countryCode,contact, email)
  useEffect(() => {
    setContactDetails({
      countrycode: countryCode,
      contact: contact,
      email: email,
    });
  }, [countryCode, contact, email]);

  return (
    <div className="Passenger_basic_details">
      <div className="paxheading">Lead Pax Contact Details</div>
      <div className="paxinput_box">
        <ul>
          <li>
            <label>
              Phone Country Code <small>*</small>{" "}
            </label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option>Select Country</option>
              <option>Nigeria (+234)</option>
              <option>Algeria (+213)</option>
              <option>Andorra (+376)</option>
              <option>Angola (+244)</option>
              <option>Anguilla (+1264)</option>
              <option>Antigua & Barbuda (+1268)</option>
              <option>Argentina (+54)</option>
              <option>Armenia (+374)</option>
              <option>Aruba (+297)</option>
            </select>
          </li>
          <li>
            <InputDiv
              value={contact}
              onChangeValue={(e) => setContact(e.target.value)}
              label={"Phone Number"}
              type={"number"}
              placeholder={"Enter Phone Number"}
              star={"*"}
            />
          </li>
          <li>
            <InputDiv
              value={email}
              onChangeValue={(e) => setEmail(e.target.value)}
              label={"Email"}
              type={"Email"}
              placeholder={"Enter Email"}
              star={"*"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PassengerDetails;
