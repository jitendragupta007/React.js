import React,{useState, useEffect} from "react";
import { addSelectedRoomDetails } from "../../../../../../Store/SelectedRoomSlice";

import { useDispatch, useSelector } from "react-redux";

const BoardTypeRow = ({ element,roomType }) => {
  const dispatch = useDispatch();
  const [BGColor, setBGColor] = useState("white")
  const [isHovering, setIsHovering] = useState(false);
  const [textColor, setTextColor] = useState("green")

  
  useEffect(() => {
    element?.cancellationtext === "Non-Refundable" ? setTextColor("red") : setTextColor("green")

  })  
  
  
  const selectedRoom = useSelector(
    (store) => store?.SelectedRoom?.data[0]?.element
  );



  console.log("selectedroom", selectedRoom)
  console.log("elementCheck", element)


  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  const handleSelectRoom = (element) => {
  dispatch(addSelectedRoomDetails({element,roomType}))
}

 
  return (
    <tr>
      <td>{element?.boardName}</td>
      <td onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >
        {" "}
        <span style={{ color: textColor }}>
          {element?.cancellationtext}{" "}
          <i className="fa fa-fw fa-info-circle"></i>
        </span>{" "}
        { (isHovering && element?.is_cancellable)  &&
          <div className='cancellation'  >
           {element?.cancellationtext}
          </div>
        } 

      </td>
     
      <td>
        {" "}
        {element?.currency} <strong>{element?.net_price}</strong>{" "}
      </td>
      <td>
        {" "}
        <button style={{
            backgroundColor: selectedRoom === element ? 'green' : 'white',
          }} onClick={()=>handleSelectRoom(element)} className="r_btn">
          Select
        </button>{" "}
      </td>
    </tr>
  );
};

export default BoardTypeRow;
