import React, { useState, useContext } from "react";
import { addressFormData } from "../data/addressFormData";
import { MainContext } from "./Home";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [main, setMain] = useContext(MainContext);
  const navigate = useNavigate();
  const [addrData, setAddrData] = useState({
    "address-submit": "Submit",
    ...main["address"],
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await setMain({ ...main, address: addrData });
    // await navigate("/details");
  };

  return (
    <Form
      formData={addressFormData}
      handleOnSubmit={handleOnSubmit}
      context={[addrData, setAddrData]}
    />
  );
};

export default Address;
