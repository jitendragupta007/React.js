import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
    <Filters/>
      <div className="productContainer">
        {products.map((element) => {
          return <SingleProduct element={element} key={element.id} a />;
        })}
      </div>
    </div>
  );
};

export default Home;
