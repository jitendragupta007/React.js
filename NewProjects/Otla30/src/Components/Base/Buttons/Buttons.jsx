import React from "react";

const Buttons = () => {
  return (
    <ul className="login-buttons">
      <li>
        <a href="">
          <img src="assets/images/home/binance.svg" alt="" />{" "}
          <span>Continue with Binance</span>
        </a>
      </li>
      <li>
        <a href="" className="fb">
          <i className="fa-brands fa-facebook"></i>{" "}
          <span>Continue with Facebook</span>
        </a>
      </li>
      <li>
        <a href="" className="google">
          <i className="fa-brands fa-google"></i>
          <span>Continue with Google</span>
        </a>
      </li>
      <li>
        <a href="" className="wechat">
          <i className="fa-brands fa-weixin"></i>
          <span>Continue with Wechat</span>
        </a>
      </li>
    </ul>
  );
};

export default Buttons;
