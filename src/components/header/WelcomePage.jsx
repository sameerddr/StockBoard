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
            <h1 className="animate-charcter">Welcome {userName.name}</h1>
            <div>
              <h2 className="animate-charcter">Email id : {userName.email}</h2>
            </div>
          </div>
          <NavLink to="/">
            <button id="home-button">HOME</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default WelcomePage;
