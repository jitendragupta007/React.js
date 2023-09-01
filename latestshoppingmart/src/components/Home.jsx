import SingleCard from "./SingleCard";
import "./mart.css";
import { CartContext } from "../App";
import React, { useContext } from "react";

const Home = ({ setCartData, cartData }) => {
  const items = useContext(CartContext);

  // console.log ("fullData", items.data)
  // console.log ("filterData", items.filterData)

  let totaldata;
  if (items.filterData.length == 0) {
    totaldata = items.data;
  } else {
    totaldata = items.filterData;
  }

  return (
    <>
      <div className="container">
        {totaldata?.map((element) => {
          return (
            <SingleCard
              key={element.id}
              element={element}
              setCartData={setCartData}
              cartData={cartData}
      
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
