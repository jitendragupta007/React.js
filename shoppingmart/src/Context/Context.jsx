import { createContext, useReducer, useContext } from "react";
import React from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from  "./Reducers"

const Cart = createContext();
faker.seed(119)
// it will rendr only one time. we made it static by doing this.

const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 30, max: 200 }),
    image: faker.image.urlLoremFlickr({ category: 'watch' }) ,
    fastDelivery: faker.datatype.boolean(),
    
  }));

  console.log(products)
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart:[],  
  });

 return (
  <Cart.Provider value={{ state, dispatch }}>
  {children}
  </Cart.Provider>
  )
};

export default Context;

export const CartState=()=>{
return useContext(Cart)

}
