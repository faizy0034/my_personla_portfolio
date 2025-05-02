import React from "react";
import "./bottomnav.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <a href="#home"><FaHome /><span>Home</span></a>
      <a href="#about"><FaUser /><span>About</span></a>
      <a href="#services"><FaBriefcase /><span>Services</span></a>
      <a href="#contact"><FaEnvelope /><span>Contact</span></a>
    </nav>
  );
};

export default BottomNav;
