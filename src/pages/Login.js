import React, { useState } from "react";
import Form from "../components/Form";
import { loginFormData } from "../data/loginFormData";

const Login = () => {
  const [loginData, setLoginData] = useState({
    "login-submit": "Login",
  });
  const handleOnLogin = (e) => {
    console.log(loginData);
    e.preventDefault();
  };

  return (
    <Form
      formData={loginFormData}
      handleOnSubmit={handleOnLogin}
      context={[loginData, setLoginData]}
    />
  );
};

export default Login;
