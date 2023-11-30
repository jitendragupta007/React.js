import React,{useEffect,useState} from 'react'
import Slider from "@mui/material/Slider";


const FilterPrice = ({selectedPrices, setSelectedPrices }) => {
  const [range, setRange] = useState([1, 100]);
  function handleChanges(event, newValue) {
     setRange(newValue);
  }
  useEffect(() => {
    const updatedPrices = [range[0], range[1]];
    setSelectedPrices(updatedPrices);
  }, [range, setSelectedPrices]);

  return (
    <div style = {{ width: "20rem", padding: "20px" }}>
         <h3>Price</h3>
         <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]*100}$ - {range[1]*1000}$
      </div>
  )
}

export default FilterPrice
