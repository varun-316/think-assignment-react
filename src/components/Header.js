import React from "react";
import LoginButton from "./Header/LoginButton";
import Title from "./Header/Title";
import SignupButton from "./Header/SignupButton";

const Header = () => {
  return (
    <div id={"header"}>
      <Title title="Think React Assignment" />
      <div id={"main-btn-grp"}>
        <SignupButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
