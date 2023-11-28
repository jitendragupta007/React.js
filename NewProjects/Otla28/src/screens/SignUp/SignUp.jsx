import React from "react";
import Buttons from "../../Components/Base/Buttons/Buttons";
import InputDiv from "../../Components/Base/Input/InputDiv";

const SignUp = () => {
  return (
    <section className="login-page">
      <div className="inner-box">
        <div className="title">login</div>
        <div className="login-flex">
          <div className="form-content">
            <InputDiv label={"First Name"} type={"text"} />
            <InputDiv label={"Last Name"} type={"text"} />
            <InputDiv label={"Email"} type={"email"} />
            <InputDiv label={"Create Password"} type={"password"} />
            <InputDiv label={"Confirm Password"} type={"password"} />

            <button className="login-btn">Register</button>
            <p>
              By clicking 'Register', I agree to the{" "}
              <a href="terms-condition.html">Terms of Use</a> and{" "}
              <a href="privacy-policy.html">Privacy Policy</a>{" "}
            </p>
          </div>

          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
