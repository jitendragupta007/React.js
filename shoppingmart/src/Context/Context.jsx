import { createContext, useReducer, useContext } from "react";
import React from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

//Context api file will keep all the states of our app so we can call 
//in any page whereever any state is required. 
//it helps us 
// in the prop drilling by the components.

const Cart = createContext();
faker.seed(777);
// it will rendr only one time. we made it static by doing this.

const Context = ({ children }) => {    //children will come from index.js

  //faker generates random data whatever we need in our practice project.

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 30, max: 200 }),
    image: faker.image.urlLoremFlickr({ category: "watch" }),
    fastDelivery: faker.datatype.boolean(),
  }));

  //console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  //use reducer is the alternative of the useState. It handles the 
  //complex states which are complex and are unable to handle by the
  //usState.
  // "state has the all states of our app"
  //"dispatch variable manipulates the state"
  //"cartReducer will be created in other file"

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
  //Cart.Provider will wrap our whole react app.
  //we are sending state and dispatch to the reducer page so that we will perform operations on the data.
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
