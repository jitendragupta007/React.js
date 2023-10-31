import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import Error from "./components/Error";
import Body from "./components/Body";
import RestroMenu from "./components/RestroMenu";
import Cart from "./components/Cart";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Offers from "./components/Offers";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/offers",
        element: <Offers/>,
      },
    ],
    errorElement: <Error />,
  },
]);
//resIs is dynamic here. resId can be changed according to the restaurant. 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
