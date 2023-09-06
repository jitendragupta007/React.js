import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState, useEffect, createContext } from "react";
import {ToastContainer} from "react-toastify"

export const CartContext = createContext();

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [cartData, setCartData] = useState([]);


  //We should make states always here so we can provide data 
  //her to everywhere in the app.
  //it will help in the big projects in children components
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
    
      <CartContext.Provider value={{ data, filterData, cartData }}>
        <div className="App">
          <NavBar setState={setState}  cartData={cartData} homepage={()=>setState('')} />
          <ToastContainer  position="top-center" autoClose={500} limit={1}   />
          <Routes>
            <Route
              path="/"
              element={<Home cartData={cartData} setCartData={setCartData} />}
            />
            <Route path="/cart" element={<Cart setCartData={setCartData} />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
