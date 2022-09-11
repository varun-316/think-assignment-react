import React, { useContext, useState } from "react";
import { MainContext } from "./Home";

const Details = () => {
  const [main] = useContext(MainContext);
  const [details] = useState({
    ...main,
  });

  return (
    <React.Fragment>
      <p>{JSON.stringify(details)}</p>
    </React.Fragment>
  );
};

export default Details;
