import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body/Body";
import Market from "./components/Market/Market";
import Trade from "./components/Trade/Trade";
import Funds from "./components/Funds/Funds";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import Forgott from "./components/Forgot/Forgott";
import Invite from "./components/Invite/Invite";
import Account from "./components/Account/Account";
import KYC from "./components/KYC/KYC";
import MyProfile from "./components/Account/MyProfile";
import CurrencyPrefrence from "./components/Account/CurrencyPrefrence";
import BankAccountDetails from "./components/Account/BankAccountDetails";
import Notification from "./components/Account/Notification";
import TwoFactorAuth from "./components/Account/TwoFactorAuth";
import Security from "./components/Account/Security";
import ActivityLogs from "./components/Account/ActivityLogs";
import TransferHistory from "./components/Account/TransferHistory";
import DownloadReports from "./components/Account/DownloadReports";



const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/trade",
        element: <Trade />,
      },

      { path: "/funds", 
      element: <Funds /> 
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/forgot",
        element: <Forgott />,
      },
      {
        path: "/invite",
        element: <Invite />,
      },
      {
        path: "/kyc",
        element: <KYC />,
      },
      {
        path: "/",
        element: <Account/>,
        children: [
          {
            path: "/account/",
            element: <MyProfile />,
          },
          {
            path: "/account/currencypreference",
            element: <CurrencyPrefrence />,
          },
        
          {
            path: "/account/bankaccountdetails",
            element: <BankAccountDetails />,
          },
          {
            path: "/account/notification",
            element: <Notification />,
          },
          {
            path: "/account/twofactorauthentication",
            element: <TwoFactorAuth/>,
          },
          {
            path: "/account/security",
            element: <Security/>,
          },
          {
            path: "/account/activitylogs",
            element: <ActivityLogs />,
          },
          {
            path: "/account/transferhistory",
            element: <TransferHistory />,
          },
          {
            path: "/account/downloadreports",
            element: <DownloadReports />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
