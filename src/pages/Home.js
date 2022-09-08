import React from "react";
import Header from "../components/Header";
import Login from "./Login";
import Personal from "./Personal";

const Home = () => {
  return (
    <React.Fragment>
      <Login />
      <Personal />
    </React.Fragment>
  );
};

export default Home;
