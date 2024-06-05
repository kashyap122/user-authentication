import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navigation">
        <div className="">
        <a href="/">Home</a>
        </div>
        <div>
        <a href="/about">About</a>
        </div>
        <div>
        <a href="/signin">signin</a>
        </div>
        <div>
        <a href="/signup">signup</a>
        </div>
    </div>
  );
};

export default Navbar;
