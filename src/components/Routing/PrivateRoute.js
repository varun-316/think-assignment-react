import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { MainContext } from "../../pages/Home";

const PrivateRoute = ({ children, route }) => {
  const [main] = useContext(MainContext);
  const auth = useAuth(route, main);
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
