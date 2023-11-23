import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Components/Body/Body';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/Contact/ContactUs';
import Hotel from './Components/Hotel/Hotel';
import Packages from './Components/Packages/Packages';
import TourDetails from './Components/TourDetails/TourDetails';
import Result from './Components/Result/Result';
import Checkout from './Components/Checkout/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
     {
      path:"/",
      element:<Body/>
     },
     {
      path:"/about",
      element:<AboutUs/>
     },
     {
      path:"/contact",
      element:<ContactUs/>
     },
     {
      path:"/hotel",
      element:<Hotel/>
     },
     {
     path:"/packages",
     element:<Packages/>
    },
    {
      path:"/tourdetails",
      element:<TourDetails/>
     },

     {
      path:"/result",
      element:<Result/>
     },
     {
      path:"/checkout",
      element:<Checkout/>
     },
    
  


    ]
  }


])




root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
