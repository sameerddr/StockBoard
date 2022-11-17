import React, { useContext } from "react";
import Login from "./Login";
import WelcomePage from "./WelcomePage";
import { MainContext } from "../../context/MainContext";

const HomePage = () => {
  const { isloggedin } = useContext(MainContext);
  return <div>{isloggedin ? <WelcomePage /> : <Login />}</div>;
};

export default HomePage;
