import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

import { MainContext } from "../../context/MainContext";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const { inputt, setInputt } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(inputt));
    navigate("/Login");
  };

  const handaleInputRegister = (e) => {
    setInputt({ ...inputt, [e.target.name]: e.target.value });
  };
  return (
    <div className="body-register ">
      <div className="formContainer">
        <NavLink to="/">
          <CloseOutlined className="close" />
        </NavLink>
        <form onSubmit={handleSubmit}>
          <div className="main-ragister-div">
            <div>
              <h2 className="log-text">SIGN UP</h2>
              <label htmlFor="email">Name</label>
              <br />
              <input
                className="name-input"
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={inputt.name}
                onChange={handaleInputRegister}
              />
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <br />
              <input
                className="email-input"
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={inputt.email}
                onChange={handaleInputRegister}
              />
            </div>
            <div>
              <label htmlFor="pswd">Password </label>
              <br />
              <input
                className="password-input"
                type="password"
                id="pswd"
                placeholder="Enter password"
                name="password"
                value={inputt.password}
                onChange={(e) => {
                  setInputt({ ...inputt, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="btn_div">
              <button type="submit" className="submit_btn" onClick={() => {}}>
                Submit
              </button>
              <p className="already-login">
                Already have Account?
                <Link to="/login">
                  <span className="register">
                    <u> LOGIN</u>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
