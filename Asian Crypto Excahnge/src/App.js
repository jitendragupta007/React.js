import { Outlet } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import DisplayComponent from "./Utils/DisplayComponent";
import Header2 from "./components/Headers/Header2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileProvider } from "./Utils/profileDataContext";


function App() {
  
  return (
    <ProfileProvider >
    <div className="App">
      <DisplayComponent>
        {!sessionStorage.getItem("token") ? <Header /> : <Header2 />}
      </DisplayComponent>

      <ToastContainer position="top-center" autoClose={1000} limit={1} />

      <Outlet />

      <DisplayComponent>
        <Footer />
      </DisplayComponent>
    </div>
    </ProfileProvider>
  );
}

export default App;
