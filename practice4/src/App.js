import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>

         <Route path='/'>
         <Route index element={<Home />}/ >
          <Route path="/" element={<Home />} />
          
          </Route>
          <Route  path="/app/:userId" element={<userDetails/>}/>

          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          <Route path="/About" element={<About />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
