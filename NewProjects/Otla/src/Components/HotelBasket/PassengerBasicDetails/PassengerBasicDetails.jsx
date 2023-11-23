import React from "react";

const PassengerBasicDetails = () => {
  return (
    <div className="Passenger_basic_details">
      <div className="paxheading">Room 1 | ADULT 1</div>
      <div className="paxinput_box">
        <ul>
          <li>
            <label>
              Title of guest <small>*</small>{" "}
            </label>
            <select>
              <option>Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </select>
          </li>
          <li>
            <label>
              {" "}
              First Name <small>*</small>
            </label>
            <input type="text" placeholder="Enter First Name" />
          </li>

          <li>
            <label>
              {" "}
              Last Name <small>*</small>
            </label>
            <input type="text" placeholder="Enter Last Name" />
          </li>
          <li>
            <label>
              Date Of Birth <small>*</small>{" "}
            </label>
            <input type="text" placeholder="DD/MM/YYYY" />
          </li>

          <li>
            <label>
              {" "}
              Gender <small>*</small>
            </label>
            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </li>
          <li>
            <label>
              Nationality <small>*</small>{" "}
            </label>
            <select>
              <option>Nationality</option>
              <option>Nigeria</option>
              <option>Afghanistan</option>
              <option>Aland Islands</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>American Samoa</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Anguilla</option>
              <option>Argentina</option>
              <option>Bahamas</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PassengerBasicDetails;
