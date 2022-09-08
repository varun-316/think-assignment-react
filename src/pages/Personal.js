import React, { useState, useContext } from "react";
import { personalFormData } from "../data/personalFormData";
import { MainContext } from "./Home";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";

const Personal = () => {
  const [main, setMain] = useContext(MainContext);
  const navigate = useNavigate();
  const [personalData, setPersonalData] = useState({
    "personal-submit": "Next",
    ...main["personal"],
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await setMain({ ...main, personal: personalData });
    await navigate("/govt");
  };

  return (
    <Form
      formData={personalFormData}
      handleOnSubmit={handleOnSubmit}
      context={[personalData, setPersonalData]}
    />
  );
};

export default Personal;
