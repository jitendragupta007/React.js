import React from "react";

const InputDiv = ({ label, type,placeholder, star, value, onChangeValue }) => {
  return (
    <div>
      <div className="input-box">
        <label> {label}<small>{ star}</small></label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChangeValue} />
      </div>
    </div>
  );
};

export default InputDiv;
