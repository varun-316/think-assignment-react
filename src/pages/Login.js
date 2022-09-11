import React, { useContext, useEffect, useState } from "react";
import Form from "../components/Form";
import { loginFormData } from "../data/loginFormData";
import { MainContext } from "./Home";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [main, setMain] = useContext(MainContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    "login-submit": "Login",
    ...main["login"],
  });

  const handleOnLogin = async (e) => {
    e.preventDefault();
    await setMain({ ...main, login: loginData });
    await navigate("/personal");
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
