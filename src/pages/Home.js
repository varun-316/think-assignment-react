import React, { createContext, useState } from "react";
import Address from "./Address";
import Govt from "./Govt";
import Login from "./Login";
import Personal from "./Personal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Routing/PrivateRoute";
import Page404 from "./404";
import Header from "../components/Header";

export const MainContext = createContext({});

const Home = () => {
  const [mainState, setMainState] = useState({});

  return (
    <MainContext.Provider value={[mainState, setMainState]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Login />} />
          <Route
            path={"/personal"}
            element={
              <PrivateRoute route={"login"}>
                <Personal />
              </PrivateRoute>
            }
          />
          <Route
            path={"/govt"}
            element={
              <PrivateRoute route={"personal"}>
                <Govt />
              </PrivateRoute>
            }
          />
          <Route
            path={"/address"}
            element={
              <PrivateRoute route="govt">
                <Address />
              </PrivateRoute>
            }
          />
          {/* <Route
            path={"/details"}
            element={
              <PrivateRoute route="address">
                <></>
              </PrivateRoute>
            }
          /> */}
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default Home;
