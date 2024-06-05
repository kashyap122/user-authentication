import React from "react";
import SignIn from "../SignIn/SignIn";
import "../SignIn/SignIn.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { validateEmail } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };

  const submitRegistration = () => {
    if (firstName === "") {
      setError("please enter first name!");
    } else if (lastName === "") {
      setError("please enter last name!");
    } else if (!validateEmail(email)) {
      setError("please enter valid Email ID!");
    } else if (password === "" || password.length < 5) {
      setError("password must be more than 4 digit!");
    } else if (confirmPassword != password) {
      setError("password and confirm password are not same!");
    } else {
      localStorage.setItem("firstname", firstName);
      localStorage.setItem("lastname", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassowrd", confirmPassword);

      alert("form submitted");

      console.log("first name :-" + firstName);
      console.log("last name :-" + lastName);
      console.log("email :-" + email);
      console.log("password :-" + password);
      console.log("confirm password :-" + confirmPassword);

      HomePage();
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>Sign Up</h1>
      </div>
      <div className="signIn">
        <div className="formInputs row">
          <label className="col-md-6" htmlFor="">First Name :</label>
          <input className="col-md-6"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="formInputs row">
          <label htmlFor="" className="col-md-6">Last Name :</label>
          <input className="col-md-6"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="formInputs row">
          <label className="col-md-6" htmlFor="">E-mail :</label>
          <input className="col-md-6"
            type="email"
            name=""
            id=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="formInputs row">
          <label htmlFor="" className="col-md-6">Password :</label>
          <input className="col-md-6"
            type="password"
            name=""
            id=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="formInputs row">
          <label htmlFor="" className="col-md-6">Confirm Password :</label>
          <input className="col-md-6"
            type="password"
            name=""
            id=""
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="error">
                {error}
              </div>
        <div className="buttons">
          <div className="formInputs">
            <button className="btn btn-primary" onClick={()=>submitRegistration()}>Submit</button>
          </div>
          <div className="formInputs">
            <button className="btn btn-primary" type="reset">Reset</button>
          </div>
        </div>
        <div>
        already registred? <a href="/signin">signin</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
