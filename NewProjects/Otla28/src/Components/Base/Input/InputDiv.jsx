import React from "react";

const InputDiv = ({ label, type,placeholder, star }) => {
  return (
    <div>
      <div className="input-box">
        <label> {label}<small>{ star}</small></label>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputDiv;
