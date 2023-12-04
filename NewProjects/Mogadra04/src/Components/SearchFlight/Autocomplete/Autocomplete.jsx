import React from "react";
import "./Autocomplete.css"

const Autocomplete = ({ data, setPlace, setShow, setData,setSelected  }) => {

const handleSelected = (element) => {
  setSelected(element) 
  setPlace(element?.AirportName)
  setShow(false);
  setData([])
}

  return (
   
      
      <div className="seachboxdiv">
        <label className="suggetion">Suggestions</label>
        <ul className="autocompletelist">
      { data &&     data?.map((element) => {
        return (
          <li key={element?.AirportCode} onClick={()=>handleSelected(element)}>
            {element?.AirportName}
            <span>{element?.City + "," + element?.Country}</span>
          </li>
        );
      })}
      </ul>
      </div>
    
  );
};

export default Autocomplete;
