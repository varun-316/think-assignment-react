import React from "react";
import LoginButton from "./Header/LoginButton";
import Title from "./Header/Title";

const Header = () => {
  return (
    <React.Fragment>
      <Title title="Think React Assignment" />
      <LoginButton />
    </React.Fragment>
  );
};

export default Header;
