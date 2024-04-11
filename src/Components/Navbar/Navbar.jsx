import React from "react";
import "./Navbar.css";
import logo from "../../assets/gopi1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" width={"150px"} height={"80px"} />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
