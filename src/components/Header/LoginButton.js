import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../pages/Home";

const LoginButton = () => {
  const navigate = useNavigate();
  const [main, setMain] = useContext(MainContext);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (main.hasOwnProperty("login")) {
      setIsLogin(true);
    }
  }, [main]);

  const handleOnClick = (e) => {
    if (isLogin) {
      setMain({});
      setIsLogin(false);
    }
    navigate("/");
  };

  return (
    <React.Fragment>
      <button
        id={"main-login"}
        onClick={(e) => {
          handleOnClick(e);
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </React.Fragment>
  );
};

export default LoginButton;
