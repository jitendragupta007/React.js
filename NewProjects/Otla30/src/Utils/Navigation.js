import { createBrowserRouter } from "react-router-dom";
import RoomsAndPrices from "../Components/HotelDetails/ContentInfo/Rooms&Prices/RoomsAndPrices";
import HotelRoomInfo from "../Components/HotelDetails/ContentInfo/HotelInfo/HotelRoomInfo";
import App from "../App";
import Result from "../screens/Result/Result";
import HotelDetails from "../screens/HotelDetails/HotelDetails";
import ContactUs from "../screens/ContactUs/ContactUs";
import SignUp from "../screens/SignUp/SignUp";
import LogIn from "../screens/LogIn/LogIn";
import HomePage from "../screens/HomePage/HomePage";
import AboutUs from "../screens/AboutUs/AboutUs";
import HotelBasket from "../screens/HotelBasket/HotelBasket";

export const appRouter = createBrowserRouter([
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
            path: "/details/:hotelName/:hotelid",
            element: <RoomsAndPrices />,
          },
          {
            path: "/details/:hotelName/:hotelid/hotelroominfo",
            element: <HotelRoomInfo />,
          },
        ],
      },
      {
        path: "/hotelbasket/:checkoutMessage",
        element: <HotelBasket />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);
