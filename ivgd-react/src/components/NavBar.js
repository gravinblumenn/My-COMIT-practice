import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Button } from "./Button";

function NavBar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            IVGD<i className="fas fa-gamepad"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times-circle" : "fas fa-ellipsis-h"}
            ></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Categories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
