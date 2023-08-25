import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);


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
    setFilterData(newdata);
  }, [state]);




  return (
    <>
      <CartContext.Provider value={{data, filterData}}>
        <div className="App">
          <NavBar setState={setState} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
