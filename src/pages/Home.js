import React, { createContext, useState } from "react";
import Address from "./Address";
import Govt from "./Govt";
import Login from "./Login";
import Personal from "./Personal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Routing/PrivateRoute";

export const MainContext = createContext({});

const Home = () => {
  const [mainState, setMainState] = useState({});

  return (
    <MainContext.Provider value={[mainState, setMainState]}>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Login />} />
          <Route
            path={"/personal"}
            element={
              <PrivateRoute>
                <Personal />
              </PrivateRoute>
            }
          />
          <Route
            path={"/govt"}
            element={
              <PrivateRoute>
                <Govt />
              </PrivateRoute>
            }
          />
          <Route
            path={"/address"}
            element={
              <PrivateRoute>
                <Address />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default Home;
