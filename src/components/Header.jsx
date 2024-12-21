import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://st2.depositphotos.com/32634758/49542/v/450/depositphotos_495423316-stock-illustration-logo-monogram-circle-rounded-slice.jpg"
            alt="Logo"
          />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="menu" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </header>


      <div className={`popup-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <nav className="popup-nav">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
