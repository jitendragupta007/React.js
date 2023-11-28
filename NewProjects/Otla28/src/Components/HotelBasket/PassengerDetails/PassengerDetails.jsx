import React from "react";
import InputDiv from "../../Base/Input/InputDiv";

const PassengerDetails = ({ details, setDetails }) => {
    console.log("details",details)
  return (
    <div className="Passenger_basic_details">
      <div className="paxheading">Lead Pax Contact Details</div>
      <div className="paxinput_box">
        <ul>
          <li>
            <label>
              Phone Country Code <small>*</small>{" "}
            </label>
            <select>
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
              value={details?.contact}
              onChange={(e) => setDetails({...details, contact:e.target.value })}
              label={"Phone Number"}
              type={"number"}
              placeholder={"Enter Phone Number"}
              star={"*"}
            />
          </li>
          <li>
            <InputDiv
              label={"Email"}
              type={"Email"}
              placeholder={"Enter Email"}
              star={"*"}
              value={details?.email}
                          onChange={(e) => setDetails({...details,email:e.target.value })}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PassengerDetails;
