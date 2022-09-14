import React, { useState } from "react";
import { signupFormData } from "../data/signupFormData";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    "signup-submit": "Sign Up",
    // ...main["signup"],
  });

  const unameValidate = () => {
    if (signupData.hasOwnProperty("username")) {
      if (signupData["username"].trim() === "") {
        alert("Username can't be empty");
        return false;
      } else {
        return true;
      }
    }
  };
  const matchPasswords = () => {
    if (
      signupData.hasOwnProperty("repeat") &&
      signupData.hasOwnProperty("password-signup")
    ) {
      if (signupData["repeat"] !== signupData["password-signup"]) {
        alert("Passwords don't match!");
        return false;
      } else return true;
    } else return false;
  };
  const handleOnSignup = async (e) => {
    const match = await matchPasswords();
    const uname = await unameValidate();
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Form
        formData={signupFormData}
        handleOnSubmit={handleOnSignup}
        context={[signupData, setSignupData]}
      />
    </React.Fragment>
  );
};

export default Signup;
