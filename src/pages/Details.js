import React, { useContext } from "react";
import { MainContext } from "./Home";

const Details = () => {
  const [main] = useContext(MainContext);

  return (
    <React.Fragment>
      <h2>Username:</h2> {main.login.username} <br /> <br />
      <h2>Personal Information:</h2>
      <b>Name:</b> {`${main.personal.firstname} ${main.personal.lastname}`}{" "}
      <br />
      <b>Contact:</b> {main.personal.phone} <br />
      <b>Email:</b> {main.personal.email} <br />
      <b>Email:</b> {main.personal.email} <br />
      <b>Address:</b> <br /> {main.address.addr1} <br /> {main.address.addr2}{" "}
      <br />
      <b>Pincode:</b> {main.address.pin}
      <br />
      <br />
      <h2>Identification:</h2>
      <b>Aadhaar Number:</b> {main.govt.aadhaar}
      <br />
      <b>PAN:</b> {main.govt.pan}
    </React.Fragment>
  );
};

export default Details;
