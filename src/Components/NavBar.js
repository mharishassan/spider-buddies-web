import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "./Logo";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(false); // Close the menu
    window.location.href = "https://form.jotform.com/240366131820447";
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <Logo />
            <span>Spider Buddies</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/our-team"
                activeClassName="active"
                className="nav-links"
                onClick={() => setClick(false)}
              >
                Our Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="https://form.jotform.com/240366131820447"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Join Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={() => setClick(!click)}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
