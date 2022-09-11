import React from "react";
import LoginButton from "./Header/LoginButton";
import Title from "./Header/Title";

const Header = () => {
  return (
    <div id={"header"}>
      <Title title="Think React Assignment" />
      <LoginButton />
    </div>
  );
};

export default Header;
