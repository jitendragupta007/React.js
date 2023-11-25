import React from "react";

const BoardTypeRow = ({ element, setSelected}) => {

  const selectedRoom = (element) => {
    setSelected(element);
    console.log("button clicked");
  };

  return (
    <tr>
      <td>{element?.boardName}</td>
      <td>
        {" "}
        <span>
          {element?.cancellationtext}{" "}
          <i className="fa fa-fw fa-info-circle"></i>
        </span>{" "}
      </td>
      <td>
        {" "}
        {element?.currency} <strong>{element?.net_price}</strong>{" "}
      </td>
      <td>
        {" "}
        <button  className="r_btn">
          Select
        </button>{" "}
      </td>
    </tr>
  );
};

export default BoardTypeRow;
