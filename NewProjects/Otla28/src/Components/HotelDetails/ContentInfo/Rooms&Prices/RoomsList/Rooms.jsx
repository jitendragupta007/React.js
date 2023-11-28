import React from "react";
import BoardTypeRow from "./BoardTypeRow/BoardTypeRow";

const Rooms = ({ element }) => {
 
   

  return (
    <div className="room_table_row">
      <a href="" className="standard_room">
        {" "}
        <i className="fa fa-fw fa-bed"></i> {element?.text}
      </a>
      <div className="tabel_row">
        <table>
          <tr>
            <th>Room</th>
            <th>Cancellation</th>
            <th>To be paid</th>
            <th></th>
          </tr>
          {element?.mealtype_list?.map((boardElem, index) => {
              return <BoardTypeRow key={index} element={boardElem}
                roomType={element?.text}
                  />
          })}
        
        </table>
      </div>
    </div>
  );
};

export default Rooms;
