import React from "react";
import AgeSelect from "./AgeSelect";

//element.childrenages

const HotelRoom = ({
  element,
  index,
  handleRemoveRoom,
  increaseAdults,
  decreaseAdults,
  increaseChilds,
  decreaseChilds,
  sliceRoomDetails,
  storeChildrenAges
}) => {
  console.log("element", element);

  const numberOfTimes = element.childs;
  const ageSelectComponents = [];

  for (let i = 0; i < numberOfTimes; i++) {
    ageSelectComponents.push(i);
  }

  return (
    <div className="maindivroomsingle" data-roomid="1">
      <h4 className="roomnotext">
        <span>Room {index + 1}</span>
        {element.roomno === sliceRoomDetails.length && element.roomno !== 1 && (
          <span
            style={{ display: "block" }}
            onClick={() => handleRemoveRoom(element?.roomno)}
            className="closeroom"
          >
            Remove
          </span>
        )}
      </h4>
      <div className="roomdata">
        <div className="flexdiv" data-min="1" data-max="6">
          <label>Adult (12+)</label>
          <div className="counter">
            <div className="minussign " onClick={() => decreaseAdults(element)}>
              -
            </div>
            <label>{element?.adults}</label>
            <div className="plussign" onClick={() => increaseAdults(element)}>
              +
            </div>
          </div>
        </div>

        <div className="flexdiv" data-min="0" data-max="4">
          <label>Children (0-17)</label>
          <div className="counter">
            <div className="minussign" onClick={() => decreaseChilds(element)}>
              -
            </div>
            <label>{element?.childs}</label>
            <div className="plussign" onClick={() => increaseChilds(element)}>
              +
            </div>
          </div>
        </div>
        <div className="flexdiv childagemaindiv">
          {ageSelectComponents.map((ageSelect, index) => {
            return (
              <div key={index}>
                <AgeSelect index={index} storeChildrenAges={storeChildrenAges}
                  roomno={element?.roomno} 
                  element={element}
                  />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
