import React, { useRef } from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";
import { checkValidData } from "../Utils/ValidateData";
import { register } from "../Utils/Auth";
import { useNavigate } from "react-router-dom";
import { mobileOTP } from "../Utils/Auth";
import { toast } from "react-toastify";

const Signin = () => {
  const name = useRef("");
  const email = useRef("");
  const mobile = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const referal = useRef("");
  const otp = useRef("");
  const resend = useRef(true);

  const navigate =useNavigate();


  const handleRegistration = async () => {
    const message = checkValidData(
      name.current.value,
      email.current.value,
      mobile.current.value,
      password.current.value,
      confirmPassword.current.value,
      referal.current.value,
      otp.current.value
    );
    
    if (message !== null) return toast.warn(message);
    const result = await register(
      mobile.current.value,
      password.current.value,
      confirmPassword.current.value,
      referal.current.value,
      otp.current.value,
    );

    console.log("signin result", result)
    if (result.success) {
      try {
        toast("Resistration successful!");
        navigate("/login");
      } catch (error) {
        console.log("error");
      }
    } else {
      toast(result.message);
      console.log(result.message);
    }
  };


  //handle OTP
  const handleOTP = async () => {
    if (mobile.current.value === "")
      return toast.warn("Mobile field should not be empty.");

   const result= await mobileOTP(mobile.current.value, resend.current);
      console.log("OTP result", result);
      if (result.success) {
        try {
          toast.success("OTP sent successfully.");
          console.log("OTP sent successfully", result.data.message);
        } catch {
          console.log("Error");
        }
      } else {
        toast.error(result.message);
        console.log(result.message, "error");
      }
  };


  return (
    <div className="signinMain">
      <div>
        <h3>Sign Up with Swigato App</h3>
      </div>
      <div className="formBodyS">
        <input ref={name} type="text" placeholder="Enter Full Name" />
        <input ref={email} type="email" placeholder="Enter Email Adress" />
        <div className="mobile">
          <input ref={mobile} type="number" placeholder="Enter Mobile Number" />
          <button onClick={handleOTP}>GET OTP</button>
        </div>
        <input ref={otp} type="number" placeholder="Enter OTP" />
        <input ref={password} type="password" placeholder="Password" />
        <input
          ref={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <input ref={referal} type="text" placeholder="Referal" />
        <button onClick={handleRegistration}>Register</button>
      </div>
      <div className="formFooter">
        <div>Already have Account?</div>{" "}
        <div id="formBtn">
          <Link to="/login">
            <h3>Login Here</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
