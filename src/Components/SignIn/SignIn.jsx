import React from "react";
import "./SignIn.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  const [emailId, setEmailId] = useState("");
  const [passwordId, setPasswordId] = useState("");
  const [error, setNotification] = useState("");

  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };
  const Login = () => {
    if (emailId === "" && passwordId === "") {
      setNotification("please enter the email and password");
    } else if (
      localStorage.getItem("email") === emailId &&
      localStorage.getItem("password") === passwordId
    ) {
      HomePage();
      setNotification("login successfully");
    } else {
      setNotification("please enter the correct email and password");
    }
  };
  return (
    <div className="">
      <Navbar />
      <div>
        <h1>Sign In</h1>
      </div>
      <div className="signIn container ">
        <div className="">
          <div className="formInputs row ">
            <label className="col-md-6">E-mail :</label>
            <input
              className="col-md-6"
              type="email"
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </div>
          <div className="formInputs row">
            <label htmlFor="" className="col-md-6">
              Password :
            </label>
            <input
              className="col-md-6"
              type="password"
              onChange={(e) => {
                setPasswordId(e.target.value);
              }}
            />
          </div>
          <div className="error">{error}</div>
          <div className="buttons">
            <div className="formInputs">
              <button className="btn btn-primary" onClick={() => Login()}>
                SignIn
              </button>
            </div>
            <div className="formInputs">
              <button className="btn btn-primary" type="reset">
                Reset
              </button>
            </div>
          </div>
          <div className="">
            Not Registered? <a href="/SignUp">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
