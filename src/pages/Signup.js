import React, { useEffect, useState } from "react";
import { signupFormData } from "../data/signupFormData";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    "signup-submit": "Sign Up",
    // ...main["signup"],
  });
  const handleOnSignup = async (e) => {
    if (
      signupData.hasOwnProperty("repeat") &&
      signupData.hasOwnProperty("password-signup")
    ) {
      if (signupData["repeat"] !== signupData["password-signup"])
        alert("Passwords don't match!");
    }
    e.preventDefault();
  };

  useEffect(() => {
    console.log(signupData);
  }, [signupData]);

  return (
    <Form
      formData={signupFormData}
      handleOnSubmit={handleOnSignup}
      context={[signupData, setSignupData]}
    />
  );
};

export default Signup;
