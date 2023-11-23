import "./App.css";
import MainHeader from "./Components/Header/MainHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { ResultProvider } from "./Store/ResultStore";
import { Provider } from "react-redux";
import MainStore from "./Store/MainStore";
import Footer from "./Components/Footer/Footer";
import PaymentIcons from "./Components/HotelDetails/PaymentIcons/PaymentIcons";
import Copyright from "./Components/HotelDetails/Copyright/Copyright";
import DisplayComponent from "./Utils/DisplayComponent";

function App() {
  return (
    <div className="App">
      <Provider store={MainStore}>
        <ResultProvider>
          <MainHeader />

          <ToastContainer
            position="top-center"
            autoClose={500}
            limit={1}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Outlet />
          <DisplayComponent>
            <Footer />
            <PaymentIcons />
            <Copyright />
          </DisplayComponent>
        </ResultProvider>
      </Provider>
    </div>
  );
}

export default App;
