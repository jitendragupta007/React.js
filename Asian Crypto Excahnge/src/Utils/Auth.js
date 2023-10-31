import axios from "axios";

//Login
export const login = async (email, password) => {
  console.log(email, "signId", password, "password");
  const url = "https://api.charlieexchange.co/v1/user/login";
  const params = {
    email_or_phone: email,
    password: password,
  };
  
  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};

//API call Post
export const ApiCallPost = async (url, parameters, headers ) => {
  console.log(url, parameters);
  try {
    const response = await axios.post(url, parameters, { headers: headers });
    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log("Error", error);
    if (
      error.response.data.message ===
      "Token is expired with message: res is not defined"
    ) {
      return;
    }
    return error.response.data;
  }
};

//API call Put
export const ApiCallPut = async (url, parameters, headers) => {
  console.log(url, parameters);
  try {
    const response = await axios.put(url, parameters, { headers: headers });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    if (
      error.response.data.message ===
      "Token is expired with message: res is not defined"
    ) {
      return;
    }
    return error.response.data;
  }
};

//Register
export const register = async (
  number,
  password,
  confirmPassword,
  referal,
  otp
) => {
  const url = "https://api.charlieexchange.co/v1/user/register";
  const params = {
    cid: 0,
    email_or_phone: number,
    password: password,
    confirm_password: confirmPassword,
    referal: referal,
    verification_code: otp,
  };
  console.log(params, "=====");
  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};

//Mobile OTP
export const handleOTP = async (number, resend) => {
  console.log("number", number, "resend", resend);
  const url = "https://api.charlieexchange.co/v1/user/send-otp";
  const params = {
    email_or_phone: number,
    resend: resend,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};


//Email OTP
export const handleOTPEmail = async (email, resend) => {
  console.log("email", email, "resend", resend);
  const url = "https://api.charlieexchange.co/v1/user/send-otp";
  const params = {
    email_or_phone: email,
    resend: resend,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  return ApiCallPost(url, params, headers);
};



//Profile Data
export const handleProfile = async (
  email,
  firstName,
  lastName,
  mobileNumber,
  profilePicture,
  otp
) => {
  console.log(
    "email",
    email,
    "firstName",
    firstName,
    "lastName",
    lastName,
    "mobileNumber",
    mobileNumber,
    "profilePicture",
    profilePicture
  );

  const url = "https://api.charlieexchange.co/v1/user/edit-profile";
  const token = sessionStorage.getItem("token");

  const params = {
    profilepicture: profilePicture,
    firstName: firstName,
    lastName: lastName,
    emailId: email,
    mobileNumber: mobileNumber,
    otp:otp,
    
  };
  const headers = {
    "Content-Type": 'multipart/form-data',
    "Authorization": token,
  };
  return ApiCallPut(url, params, headers);
};
