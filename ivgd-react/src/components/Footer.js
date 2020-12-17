import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Your one and only stop for information on any game
        </p>
        <p className="footer-subscription-text"></p>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About Us</h2>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Who we are</Link>
            <Link to="/">Career opportunities</Link>
          </div>
          <div className="footer-link-items">
            <h2> Contact Us</h2>
            <Link to="/">Email</Link>
            <Link to="/">Phone Number</Link>
            <Link to="/">Address</Link>
          </div>
          <div className="footer-link-items">
            <h2> Social Media</h2>
            <Link to="/">
              Facebook <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/">
              Instagram <i className="fab fa-instagram" />
            </Link>
            <Link to="/">
              Twitter <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
