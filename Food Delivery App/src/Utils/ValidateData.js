

export const checkValidData = (
  name,
  email,
  mobile,
  password,
  confirmPassword,
  otp
) => {
  const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (
    name === "" ||
    email === "" ||
    mobile === "" ||
    password === "" ||
    confirmPassword === "" ||
    otp===""
  )
  return "Fill all the inputs.";
  if (!isEmailValid) return "Email is not valid.";
  if (mobile.length !== 10) return " Mobile number is incorrect.";
  if (!isPasswordValid)
    return "Password is not valid. It must contain atleast 8 characters, having atleast 1 uppercase, 1 lowercase, 1 numeric and 1 special character.";
  if (password !== confirmPassword) return "Passwords doesn't match.";
 
  return null;
};
