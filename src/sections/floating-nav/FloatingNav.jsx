import React from "react";
import './floatingnav.css';
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";

const FloatingNav = () => {
  return (
    <nav className="floating-nav">
      <a href="#"><FaHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#portfolio"><FaBriefcase /></a>
      <a href="#contact"><FaEnvelope /></a>
    </nav>
  );
};

export default FloatingNav;
