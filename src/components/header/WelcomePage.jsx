import React from "react";
import { NavLink } from "react-router-dom";

import "./WelcomePage.css";

function WelcomePage() {
  const userName = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <div className="main-d-div">
        <div className="container-display">
          <div className="inner-text">
            <h2 className="animate-charcter">Welcome {userName.name}</h2>
            <h3 className="animate-charcter">Email id : {userName.email}</h3>
          </div>
          <NavLink to="/">
            <button className="home-button">HOME</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default WelcomePage;
