import React, { useState } from "react";
import { personalFormData } from "../data/personalFormData";
import Form from "../components/Form";

const Personal = () => {
  const [personalData, setPersonalData] = useState({
    "personal-submit": "Next",
  });
  const handleOnLogin = (e) => {
    console.log(personalData);
    e.preventDefault();
  };

  return (
    <Form
      formData={personalFormData}
      handleOnSubmit={handleOnLogin}
      context={[personalData, setPersonalData]}
    />
  );
};

export default Personal;
