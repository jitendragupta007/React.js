import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addItem} from '../Utils/cartSlice';


const RestMenuCard = ({imageId,price, item}) => {


  const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`

item.info["quantity"]=1;


const dispatch = useDispatch();

const handleAddItem=(item) => {

  dispatch(addItem(item))
}


  return (
    <div id="restMenuCard">
     <div>
        <img id="restDataMenuImg" src={UrlSwiggy} alt="dish" />
       <h4 id="CardPrice">Price:{price}₹</h4>
     </div>
 
     <button onClick={()=>handleAddItem(item)}>Add</button>
   
    </div>
  )
}

export default RestMenuCard
