import "./App.css";
import Outlay from "./Components/Outlay/Outlay";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { HomePageProvider } from "./ContextStore/HomePageData";

function App() {
  return (
    <div className="App">
      <Outlay />
      <Header />
      <HomePageProvider>
        <Outlet />
      </HomePageProvider>
      <Footer />
    </div>
  );
}

export default App;
