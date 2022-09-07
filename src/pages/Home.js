import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { loginFormData } from "../data/loginFormData";

const Home = () => {
  return (
    <React.Fragment>
      <Form formData={loginFormData} method={""} action={() => {}} />
    </React.Fragment>
  );
};

export default Home;
