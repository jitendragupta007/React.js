import React from "react";
import Buttons from "../../Components/Base/Buttons/Buttons";
import InputDiv from "../../Components/Base/Input/InputDiv";

const LogIn = () => {
  return (
    <section className="login-page hh">
      <div className="inner-box">
        <div className="title">login</div>
        <div className="login-flex">
          <div className="form-content">
            <InputDiv label={"Email"} type={"email"} placeholder={"Enter Email"} />
            <InputDiv label={"Password"} type={"Password"}  placeholder={"Enter Password"} />

            <button className="login-btn">Login</button>
            <a href="" className="forget-password">
              Forget Password ?
            </a>
          </div>

          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default LogIn;
