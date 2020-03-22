import React from "react";
import footerLogo from "./coverimages/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer-top-area pt-100">
      <div className="container">
        <div className="row footer-wrapper">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-widget">
              <a href="/" className="brand">
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
                  <a href="/">My account</a>
                </li>
                <li>
                  <a href="/">Register</a>
                </li>
                <li>
                  <a href="/">Log in</a>
                </li>
                <li>
                  <a href="/">My Order</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-widget single-widgets">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="/">New User</a>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
                <li>
                  <a href="/">Report Spam</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
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
                  <a href="/">+25462755, 265497466</a>
                </li>
                <li className="address">
                  <i className="fa fa-envelope"></i>
                  <a href="/">giano@gmail.com</a>
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
              <p>Copyright © Giano. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul className="terms-conditions">
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
