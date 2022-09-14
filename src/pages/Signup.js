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
  const handleOnSignup = async (e) => {
    e.preventDefault();
  };
  return (
    <Form
      formData={signupFormData}
      handleOnSubmit={handleOnSignup}
      context={[signupData, setSignupData]}
    />
  );
};

export default Signup;
