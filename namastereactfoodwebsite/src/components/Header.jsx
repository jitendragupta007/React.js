import React from "react";
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="HeaderMain">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVSuXphYiyoJCLRLQl0HHai-cZXLdPKebu-_mKTt57WewpfiWPnJ3NRqj-L-5Rvr08sw&usqp=CAU"
          alt="logo"
        />
      </div>

      <div className="HeaderAtt">
        <div>
          <h5>Home</h5>
        </div>
        <div>
          <h5>Contact Us</h5>
        </div>
        <div>
          <h5>About Us</h5>
        </div>
        <div>
          <h5>Cart</h5>
        </div>
        <div>
          <h5>Sign In</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
