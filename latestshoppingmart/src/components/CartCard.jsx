import React from "react";
import "./Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';


const CartCard = ({element,removeItem,increment,decrement, id}) => {
    
return (
    <div key={element.id} id="mainCartDiv">


      <div>
        <img src={element.image} alt={element.title} />
      </div>
      <div>
        <h4>{element.title}</h4>
      </div>
      <div>
      {(element?.quantity==1) ?
        <button id="quantityBtn" className="quantityBtn" onClick={()=>decrement(id)}><DeleteIcon/></button>
      :
      <button id="quantityBtn1" className="quantityBtn" onClick={()=>decrement(id)}>-</button>
      }
        
        <h3 className="quantity">{element.quantity}</h3>
        <button className="quantityBtn" onClick={()=>increment(id)}>+</button>
      </div>
      <div>
        <h3>{element.price}$</h3>
      </div>

      <div id="remove">
        <button id="removeItem" onClick={()=>removeItem(id)}>Remove </button>
      </div>
    </div>
  );
};

export default CartCard;
