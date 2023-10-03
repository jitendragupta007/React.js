import React from 'react'

const RestMenuCard = ({imageId,price}) => {
    const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`
  return (
    <div id="restMenuCard">
     <div>
        <img id="restDataMenuImg" src={UrlSwiggy} alt="dish" />
       <h4>Price: {price}rs</h4>
     </div>
    
     <button>Add</button>
      
    </div>
  )
}

export default RestMenuCard
