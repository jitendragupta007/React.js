import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../Utils/Auth";
import { toast } from "react-toastify";


const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(true);
  const [check, setCheck] = useState(false);


  

  const navigate = useNavigate();

  const handlePassword = () => {
    return setPasswordType(!passwordType)
  };

  // 7412987777
  // Abcd@1234


  //Login Data
  const handleLogin = async () => {
    if (number === "" || password === "")
      return toast.warn("Input fields should not be empty.");
    if (check === false) return toast.warn(`Agree to "Terms of use".`);

    const result = await login(number, password);
    if (result.success) {
      try {
        toast.success("Login Successful");
        console.log("Login Success",result.data);
        sessionStorage.setItem("token", result.data.token);
        navigate("/account");
        window.location.reload();
      } catch {
        console.log("Error");
      }
    } else {
      toast.error("Invalid Credentials");
      console.log(result.message);
    }
  };

  return (
    <div>
      <section className="logi_sec bg-img primary-color ">
        <div className="container">
          <div className="logg-card">
            <div className="row g-md-5 align-items-center">
              <div className="col-md-6">
                <img
                  src="images/login_img.png"
                  className="img-fluid login_img"
                />
              </div>
              <div className="col-md-6">
                <div className="login-form px-md-3 px-lg-5">
                  <h3 className="mb-lg-5 mb-4  text-center">
                    Login to Asian Exchange
                  </h3>
                  <div className="input-group form-group">
                    <i className="fa fa-mobile"></i>
                    <input
                      type="text"
                      name="text"
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      className="form-control px-2"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="input-group form-group">
                    <i className="fa fa-lock"></i>
                    <input
                      type={passwordType? "password" : "text"}
                      name="text"
                      className="form-control px-2"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#">
                      <i onClick={handlePassword} className="fa fa-eye"></i>
                    </a>
                  </div>

                  <div className="form-check form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      checked={check}
                      onChange={(e) => setCheck(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to Asian Exchange{" "}
                      <Link to="/login">Terms Of Use</Link>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleLogin()}
                    className="btn btn-block w-100 form-group"
                  >
                    Login
                  </button>

                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/forgot" className="text-link">
                      {" "}
                      Forgot Password?{" "}
                    </Link>
                    <Link to="/signup" className="text-link">
                      {" "}
                      Create New Account{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="text-link text-home" to="/">
            <i className="fa fa-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
