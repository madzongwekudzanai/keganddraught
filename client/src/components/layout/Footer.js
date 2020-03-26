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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices.Risus commodo.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-6">
            <div className="single-widget single-widgets">
              <h3>My Accounts</h3>
              <ul>
                <li>
                  <Link to="/">My account</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
                <li>
                  <Link to="/">Log in</Link>
                </li>
                <li>
                  <Link to="/">My Order</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-widget single-widgets">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <Link to="/">New User</Link>
                </li>
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Report Spam</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
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
                  25 Street, west Cruch, Newzeland
                </li>
                <li className="address">
                  <i className="fa fa-phone"></i>
                  <Link to="/">+25462755, 265497466</Link>
                </li>
                <li className="address">
                  <i className="fa fa-envelope"></i>
                  <Link to="/">giano@gmail.com</Link>
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
