import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { BellFilled } from "@ant-design/icons";
import { MainContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const { isloggedin, setIsLoggedin } = useContext(MainContext);

  const userName = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("LoggedIn");
    setIsLoggedin(false);
    navigate("/login");
  };
  return (
    <>
      <div className="main-navbar">
        <div className="left-navbar">
          <h2 className="h-title">kshit</h2>
          <ul className="list">
            <li>
              <NavLink className="navlink" to="/" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/Exchange">
                Exchange
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/Wallett">
                Wallett
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/Market">
                Market
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-navbar">
          <NavLink to="/Main">
            <input
              className="search-input"
              type="search"
              placeholder="Search Here"
            />
          </NavLink>
          {isloggedin ? (
            <>
              <button className="login-btn" onClick={handleLogout}>
                LOGOUT
              </button>
              <div>
                <p className="user-text">{userName.name.toUpperCase()}</p>
              </div>
            </>
          ) : (
            <>
              <NavLink to="Login">
                <button className="login-btn">LOGIN</button>
              </NavLink>
            </>
          )}

          <div className="bell">
            <BellFilled className="bell-inner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
