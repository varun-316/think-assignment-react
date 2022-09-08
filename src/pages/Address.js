import React, { useState } from "react";
import { addressFormData } from "../data/addressFormData";
import Form from "../components/Form";

const Address = () => {
  const [addrData, setAddrData] = useState({
    "address-submit": "Submit",
  });
  const handleOnSubmit = (e) => {
    console.log(addrData);
    e.preventDefault();
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
