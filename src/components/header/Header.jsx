import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../context/MainContext";

import "./Header.css";

const Header = () => {
  const { isloggedin, setIsLoggedin, setSearch } = useContext(MainContext);
  const userName = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const links = [
    {
      to: "/",
      name: "Dashboard",
    },
    {
      to: "/trade",
      name: "Trade",
    },
    {
      to: "/market",
      name: "Market",
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
          <NavLink>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="search-input"
                type="text"
                name="text"
                onChange={handleSearch}
                placeholder="Search Here"
              />
            </form>
          </NavLink>

          {isloggedin ? (
            <>
              <button className="login-btn" onClick={handleLogout}>
                LOGOUT
              </button>
              <div>
                <p className="user-text">
                  <UserOutlined className="user-icon" />
                  {userName.name.toUpperCase()}
                </p>
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
