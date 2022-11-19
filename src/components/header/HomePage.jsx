import React, { useContext } from "react";

import { MainContext } from "../../context/MainContext";
import Login from "./Login";
import WelcomePage from "./WelcomePage";

const HomePage = () => {
  const { isloggedin } = useContext(MainContext);
  return <div>{isloggedin ? <WelcomePage /> : <Login />}</div>;
};

export default HomePage;
