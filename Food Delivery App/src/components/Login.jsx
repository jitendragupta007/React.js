import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/signin.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginData } from "../Utils/Auth";

const Login = () => {
  const mobile = useRef("");
  const password = useRef("");

  const navigate = useNavigate();


  //handle Login
  const handleLogin = async () => {
    if (mobile.current.value === "" || password.current.value === "")
    return toast.warn("Fill all the inputs.");

    const result = await loginData(
      mobile.current.value,
      password.current.value
    );
    console.log("login result", result);
    if (result?.success) {
      try {
        toast.success("Logged in successfully");
        sessionStorage.setItem("token", result?.data?.token);
        navigate("/");
      } catch (error) {
        console.log("error", error);
      }
    } else {
      toast.error(result?.message);
      console.log("Login Error", result?.message);
    }
  };

//   const handleLogin = async () => {
// if (mobile.current.value==="7412987777" && password.current.value==="Abcd@1234"){
//   toast.success("login Successfull")
//   sessionStorage.setItem("token", "12345678")
//   navigate(-1)
// } else{
//   toast.error("Invalid details")
// }

//   }

  return (
    <div className="LoginMain">
      <div>
        <h3>Login with Swigato App</h3>
      </div>
      <div className="formBodyS">
        <input ref={mobile} type="number" placeholder="Enter Mobile Number" />

        <input ref={password} type="password" placeholder="Password" />

        <button onClick={handleLogin}>Log In</button>
      </div>
      <div className="formFooter">
        <div>New User?</div>{" "}
        <div id="formBtn">
          <Link to="/signin">
            <h3>Sign in Here</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
