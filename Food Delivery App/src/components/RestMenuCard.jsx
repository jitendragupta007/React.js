import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem} from '../Utils/cartSlice';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"


const RestMenuCard = ({imageId,price, item}) => {


const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`

item.info["quantity"]=1;
const token = sessionStorage.getItem("token")
const dispatch = useDispatch();
const navigate = useNavigate();

const handleAddItem=(item) => {
  if(!token) {
   toast.warn("Login First")
    navigate("/login")
 return;
 }

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
