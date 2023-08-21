import "./App.css";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [categoriesFilter, setcategoriesFilter] = useState([]);
  const [addtoCartData, setAddtoCartData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      console.log("data", data);
      setData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const newdata = data?.filter((value) => {
      return value?.category == state;
    });
    setcategoriesFilter(newdata);
  }, [state]);

  const removeCart = (id) => {
    const newarr = [...addtoCartData];
    const indexVal = addtoCartData?.findIndex((element) => {
      return element?.id == id;
    });
    newarr.splice(indexVal, 1);
    setAddtoCartData(newarr);
  };

  return (
    <div className="App">
      <Navbar setState={setState} state={state} addtoCartData={addtoCartData} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setAddtoCartData={setAddtoCartData}
              addtoCartData={addtoCartData}
              data={categoriesFilter?.length ? categoriesFilter : data}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              removeCart={(id) => removeCart(id)}
              addtoCartData={addtoCartData}
              setAddtoCartData={setAddtoCartData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
