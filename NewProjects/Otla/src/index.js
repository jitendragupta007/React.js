import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Result from "./Components/Result/Result";
import HotelDetails from "./Components/HotelDetails/HotelDetails";
import RoomsAndPrices from "./Components/HotelDetails/ContentInfo/Rooms&Prices/RoomsAndPrices";
import HotelRoomInfo from "./Components/HotelDetails/ContentInfo/HotelInfo/HotelRoomInfo";
import HotelBasket from "./Components/HotelBasket/HotelBasket";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/result/:searchToken",
        element: <Result />,
      },
      {
        path: "/",
        element: <HotelDetails />,
        children: [
          {
            path: "/details/",
            element: <RoomsAndPrices />,
          },
          {
            path: "/details/hotelroominfo",
            element: <HotelRoomInfo />,
          },
        ],
      },
      {
        path: "/hotelbasket",
        element: <HotelBasket />,
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
    ],
  },
]);

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
