import React from "react";
import Address from "./Address";
import Govt from "./Govt";
import Login from "./Login";
import Personal from "./Personal";

const Home = () => {
  return (
    <React.Fragment>
      <Login />
      <Personal />
      <Govt />
      <Address />
    </React.Fragment>
  );
};

export default Home;
