import React, { useState, useContext } from "react";
import Form from "../components/Form";
import { MainContext } from "./Home";
import { useNavigate } from "react-router-dom";

import { govtFormData } from "../data/govtFormData";

const Govt = () => {
  const [main, setMain] = useContext(MainContext);
  const navigate = useNavigate();
  const [govtData, setGovtData] = useState({
    "govt-submit": "Next",
    ...main["govt"],
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await setMain({ ...main, govt: govtData });
    await navigate("/address");
  };

  return (
    <Form
      formData={govtFormData}
      handleOnSubmit={handleOnSubmit}
      context={[govtData, setGovtData]}
    />
  );
};

export default Govt;
