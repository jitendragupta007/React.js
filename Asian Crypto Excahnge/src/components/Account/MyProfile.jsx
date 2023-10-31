import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { handleProfile } from "../../Utils/Auth";
import { handleOTPEmail } from "../../Utils/Auth";
import { useProfile } from "../../Utils/profileDataContext";

const MyProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(true);
  const baseURL = "https://api.charlieexchange.co/";

  const { profileData, getProfileData } = useProfile();

  console.log("context profile data", profileData);

  useEffect(() => {
    setFirstName(profileData.firstName ? profileData.firstName : "");
    setLastName(profileData.lastName ? profileData.lastName : "");
    setEmail(profileData.emailId ? profileData.emailId : "");
    setMobileNumber(profileData.mobileNumber);
  }, [profileData]);

  // console.log("profileData", profileData);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  //OTP Email
  const sendOTPEmail = async () => {
    if (email === "") return toast.warn("Email field should not be empty.");

    await handleOTPEmail(email, resend).then((result) => {
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
    });
  };

  //Handle Profile
  const handleSaveProfile = async (event) => {
    event.preventDefault();
    const result = await handleProfile(
      email,
      firstName,
      lastName,
      mobileNumber,
      profilePicture,
      otp
    );
    if (result.success) {
      try {
        toast.success("Profile Saved Successfully");
        getProfileData();
        console.log("Profile Saved Successfully", result);
      } catch {
        console.log("Error");
      }
    } else {
      toast.error("Submission Error");
      console.log(result.message);
    }
  };

  return (
    <div
      className="tab-pane  active show"
      id="ProfilePill"
      role="tabpanel"
      aria-labelledby="Profile-pill"
    >
      <div className="row">
        <div className="col-md-12 col-lg-8 m-auto">
          <div className="form-field-wrapper-2">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="avatar-upload">
                    <div className="avatar-edit">
                      <input
                        type="file"
                        accept="image/*"
                        id="imageUpload"
                        onChange={handleProfilePictureChange}
                        name="my file"
                      />
                      <label for="imageUpload">
                        <i className="ri-pencil-line"></i>
                      </label>
                    </div>
                    <div className="avatar-preview">
                      <img
                        src={
                          profilePicture
                            ? URL.createObjectURL(profilePicture)
                            : baseURL + profileData.profilepicture
                        }
                        alt="Profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label for="text" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      aria-describedby="First Name"
                      placeholder={"Enter First Name"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label for="text" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder={"Enter Last Name"}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label for="text" className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      onClick={sendOTPEmail}
                      type="button"
                      className="btn btn-sm btn-gradient"
                    >
                      <span>GET OTP</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="input-group form-group">
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  name="text"
                  className="form-control px-2"
                  placeholder="Enter OTP"
                  required=""
                />
              </div>
              <div className="col-md-12 mb-4">
                <div className="field-box">
                  <label for="text" className="form-label">
                    Mobile Number
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="Mobile"
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-12 mb-4 mt-4">
                  <div className="field-box">
                    <button
                      onClick={handleSaveProfile}
                      className="btn btn-gradient w-100 justify-content-center btn-medium"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
