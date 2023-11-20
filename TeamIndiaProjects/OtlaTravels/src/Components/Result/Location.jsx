import React from "react";

const Location = ({element}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          className="zonetype"
          data-value="melbourne cbd"
        />
            {element?.text}<span className="checkspan"></span>
      </label>
    </li>
  );
};

export default Location;
