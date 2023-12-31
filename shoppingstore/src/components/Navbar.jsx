import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ setState, addtoCartData }) => {
  return (
    <div className="Navbar">
      <div className="navp1">
        <h2>Shopping</h2>
        <Link id="home" to="/">
          <h2>Home</h2>
        </Link>
        <h2>Photo</h2>
        <div id="select1">
            <select id="select2" onClick={(e) => setState(e.target.value)}>
              <option value="">Category</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
         
        </div>

      <Link id="cart" to="cart"><h2>Cart({addtoCartData.length})</h2></Link>
      </div>
      <div className="navp2">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
};

export default Navbar;
