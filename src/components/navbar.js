import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar__logo">Parallax Web Services</h1>
        <ul
          className={
            isMobile ? "navbar__nav-links-mobile" : "navbar__nav-links"
          }
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className="navbar__nav-links1">
            <li>Home</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#5754a8" }}
            to="/about"
            className="navbar__nav-links1"
          >
            <li>About</li>
          </NavLink>

          <NavLink
            activeStyle={{ color: "#5754a8" }}
            to="/services"
            className="navbar__nav-links1"
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#5754a8" }}
            to="/contacts"
            className="navbar__nav-links1"
          >
            <li>Contacts</li>
          </NavLink>
        </ul>
        <button className="burger-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
