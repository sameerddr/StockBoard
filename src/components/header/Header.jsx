import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BellFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../context/MainContext";

import "./Header.css";

const Header = () => {
  const { isloggedin, setIsLoggedin } = useContext(MainContext);
  const userName = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const links = [
    {
      to: "/",
      name: "Dashboard",
    },
    {
<<<<<<< HEAD
      to: "/Exchange",
      name: "Trading",
    },
    {
      to: "/Wallett",
      name: "Market",
    },
    {
      to: "/Market",
      name: "Contact",
=======
      to: "/trade",
      name: "Trade",
    },
    {
      to: "/market",
      name: "Market",
>>>>>>> 5dd878315c77a6dd151a04d0f0daa6d4183fed3f
    },
    {
      to: "/contact",
      name: "Contact us",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("LoggedIn");
    setIsLoggedin(false);
    navigate("/login");
  };
  return (
    <>
      <div className="main-navbar">
        <div className="left-navbar">
          <h2 className="h-title">StockBoard</h2>
          <ul className="list">
            {links.map((linkss) => (
              <NavLink className="navlink" to={linkss.to}>
                {linkss.name}
              </NavLink>
            ))}
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
