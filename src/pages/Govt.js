import React, { useState } from "react";
import Form from "../components/Form";
import { govtFormData } from "../data/govtFormData";

const Govt = () => {
  const [govtData, setGovtData] = useState({
    "govt-submit": "Next",
  });
  const handleOnSubmit = (e) => {
    console.log(govtData);
    e.preventDefault();
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
