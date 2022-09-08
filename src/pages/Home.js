import React from "react";
import Govt from "./Govt";
import Login from "./Login";
import Personal from "./Personal";

const Home = () => {
  return (
    <React.Fragment>
      <Login />
      <Personal />
      <Govt />
    </React.Fragment>
  );
};

export default Home;
