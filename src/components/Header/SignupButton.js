import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../pages/Home";

const SignupButton = () => {
  const navigate = useNavigate();
  const [main, setMain] = useContext(MainContext);
  const [isLogin, setIsLogin] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    if (main.hasOwnProperty("login")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [main]);
  return (
    <React.Fragment>
      {isLogin ? (
        <React.Fragment></React.Fragment>
      ) : (
        <button id={"main-signup"} onClick={handleOnClick}>
          Signup
        </button>
      )}
    </React.Fragment>
  );
};

export default SignupButton;
