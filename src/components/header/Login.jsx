import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../context/MainContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { input, setInput, setIsLoggedin } = useContext(MainContext);

  const handleLogin = (e) => {
    const alreadyLoggedUser = JSON.parse(localStorage.getItem("users"));
    if (
      input.email === alreadyLoggedUser.email &&
      input.password === alreadyLoggedUser.password
    ) {
      localStorage.setItem("LoggedIn", true);
      setIsLoggedin(true);
      navigate("/WelcomePage");
    } else {
      alert("Please enter valid details");
    }
  };

  const handaleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div div className="body-login">
        <div className="form-main">
          <div className="formContainer">
            <NavLink to="/">
              <CloseOutlined className="close" />
            </NavLink>
            <form onSubmit={handleLogin}>
              <div className="main-login-div">
                <h2 className="log-text"> LOGIN</h2>
                <div className="content-div">
                  <label htmlFor="userEmail" className="useremail">
                    Email
                  </label>
                  <br />
                  <input
                    className="email-input"
                    type="text"
                    id="userEmail"
                    placeholder="Enter Email"
                    name="email"
                    value={input.email}
                    onChange={handaleInput}
                  />
                </div>

                <div className="password-div">
                  <label htmlFor="pswd">Password</label>
                  <br />
                  <input
                    className="password-input"
                    type="password"
                    id="pswd"
                    placeholder="Enter password"
                    name="password"
                    value={input.password}
                    onChange={handaleInput}
                  />
                </div>

                <div className="btn_div">
                  <button
                    type="submit"
                    className="submit_btn"
                    onClick={() => {}}
                  >
                    LOGIN
                  </button>
                  <div className="social-media">
                    <p className="or">------- OR -------</p>
                  </div>

                  <div className="social-icon">
                    <FacebookOutlined className="icon" />
                    <InstagramOutlined className="icon" />
                    <GithubOutlined className="icon" />
                  </div>

                  <p className="need-account">
                    Don't have Accout?
                    <Link to="/register">
                      <span className="register">
                        <u> SIGN UP</u>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
