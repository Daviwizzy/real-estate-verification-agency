import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div>
          {/* Corrected image path */}
          <img
            src="/VERIZONEB1.svg"
            alt="Logo"
            className="w-24 sm:w-32 md:w-40 lg:w-48"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="#services" className="nav-link">
            Services
          </Link>
          <Link to="#About-us" className="nav-link">
            About us
          </Link>
          <Link to="#Contact-Us" className="nav-link">
            Contact Us
          </Link>

          <Link to="#Login" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
