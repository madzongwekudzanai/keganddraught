import React from "react";
import footerLogo from "./coverimages/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-top-area pt-100">
      <div className="container">
        <div className="row footer-wrapper">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-widget">
              <a to="/" className="brand">
                <img src={footerLogo} alt="footer-logo" />
              </a>
              <p>
                Whatever you do, do it well. Do it so well that when people see
                you do it they will want to come back and see you do it again
                and they will want to bring others and show them how well you do
                what you do.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-6">
            <div className="single-widget single-widgets">
              <h3>My Accounts</h3>
              <ul>
                <li>
                  <Link to="/register">My account</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/reset">Forgot Password</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-widget single-widgets">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <Link to="/register">New User</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contacts">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">News & Updates</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-widget">
              <h3>Address</h3>
              <ul>
                <li className="address">
                  <i className="fa fa-map-marker"></i>
                  Crn 8th and 9th Ave, Avenues, Harare
                </li>
                <li className="address">
                  <i className="fa fa-phone"></i>
                  <Link to="/">+263775923028, 0775923028</Link>
                </li>
                <li className="address">
                  <i className="fa fa-envelope"></i>
                  <Link to="/">stevenmunetsi@gmail.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div>
              <p>Copyright © Keg & Draught. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul className="terms-conditions">
              <li>
                <a
                  target="_blank"
                  rel="external nofollow noopener noreferrer"
                  href="https://kudzanaimadzongwe.com"
                >
                  Website By
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="external nofollow noopener noreferrer"
                  href="https://kudzanaimadzongwe.com"
                >
                  Madzongwe Kudzanai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
