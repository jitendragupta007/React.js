import React from 'react'
import "./Cart.css"

const CartCards = ({ 
    img,
    title,
    price,
    reviews,}) => {
  return (
    <div id="mainCartDiv">
       <img src={img} alt={title} />
        <h4>{title}</h4>
        <h5>Price: {price}$</h5>
        <h6>Rating: {reviews?.rate}/5</h6>  
    </div>
  )
}

export default CartCards
