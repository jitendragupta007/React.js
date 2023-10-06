import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';


const RestMenuCard = ({imageId,price, item}) => {
const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`


const dispatch = useDispatch();

const handleAddItem=(item) => {

  dispatch(addItem(item))
}
  return (
    <div id="restMenuCard">
     <div>
        <img id="restDataMenuImg" src={UrlSwiggy} alt="dish" />
       <h4>Price: {price}rs</h4>
     </div>
    
     <button onClick={()=>handleAddItem(item)}>Add</button>
      
    </div>
  )
}

export default RestMenuCard
