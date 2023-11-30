import React, { useState, useEffect } from "react";
import { addSelectedRoomDetails } from "../../../../../../Store/SelectedRoomSlice";

import { useDispatch, useSelector } from "react-redux";

const BoardTypeRow = ({ element, roomType, firstElement }) => {
  const dispatch = useDispatch();
  const [BGColor, setBGColor] = useState("white");
  const [isHovering, setIsHovering] = useState(false);
  const [textColor, setTextColor] = useState("green");
  const element1 = firstElement?.mealtype_list[0];

  const selectedRoom = useSelector(
    (store) => store?.SelectedRoom?.data[0]?.element
  );

  if (selectedRoom === undefined) {
    dispatch(
      addSelectedRoomDetails({
        element: element1,
        roomType,
      })
    );
  }

    const handleSelectRoom = (element) => {
      dispatch(addSelectedRoomDetails({ element, roomType }));
    };
  
 

  useEffect(() => {
    element?.cancellationtext === "Non-Refundable"
      ? setTextColor("red")
      : setTextColor("green");
  });

  console.log("firstElement", firstElement?.mealtype_list[0]);
  console.log("selectedroom", selectedRoom);
  console.log("elementCheck", element);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };



  return (
    <tr>
      <td>{element?.boardName}</td>
      <td onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {" "}
        <span style={{ color: textColor }}>
          {element?.cancellationtext}{" "}
          <i className="fa fa-fw fa-info-circle"></i>
        </span>{" "}
        {isHovering && element?.is_cancellable && (
          <div className="cancellation">{element?.cancellationtext}</div>
        )}
      </td>

      <td>
        {" "}
        {element?.currency} <strong>{element?.net_price}</strong>{" "}
      </td>
      <td>
        {" "}
        <button
          style={{
            backgroundColor: selectedRoom === element ? "green" : "white",
          }}
          onClick={() => handleSelectRoom(element)}
          className="r_btn"
        >
          Select
        </button>{" "}
      </td>
    </tr>
  );
};

export default BoardTypeRow;
