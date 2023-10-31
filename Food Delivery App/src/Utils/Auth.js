import axios from "axios";

//POST
export const ApiCallPost = async (url, parameters, headers) => {
  console.log(url, parameters);
  try {
    const response = await axios.post(url, parameters, { headers: headers });
    console.log("response", response.data);
   return response.data;
  } catch (error) {
    console.log("Error", error);
    return error.response.data;
  }
};

//Register
export const register = (mobile, password, confirmPassword, referal, otp) => {
  const url = "/register";
  const params = {
    cid: 0,
    email_or_phone: mobile,
    password: password,
    confirm_password: confirmPassword,
    referal: referal,
    verification_code: otp,
  };

  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};

//Mobile OTP
export const mobileOTP = async (mobile, resend) => {
  console.log("mobile", mobile, "resend", resend);
  const url = "/send-otp";
  const params = {
    email_or_phone: mobile,
    resend: resend,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};


//Login
export const loginData = (mobile, password) => {
  const url = "/login";

  const params = {
    email_or_phone: mobile,
    password: password,
  };
  const headers = {
    "Content-Type": "application/json",
  };

  return ApiCallPost(url, params, headers);
};
