import React from "react";
import gianoLogo from "../coverimages/giano-logo.png";

const Navbar = () => {
  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav mean-container">
        <div className="mean-bar">
          <a
            href="/"
            className="meanmenu-reveal"
            style={{ right: "0", left: "auto" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav className="mean-nav">
            <ul className="navbar-nav ml-auto" style={{ display: "none" }}>
              <li className="nav-item">
                <a href="/" className="nav-link dropdown-toggle active">
                  Home
                </a>
                <ul className="dropdown-menu" style={{ display: "none" }}>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home One
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home Two
                    </a>
                  </li>
                </ul>
                <a
                  href="/"
                  className="mean-expand"
                  style={{ fontSize: "18px" }}
                >
                  +
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link dropdown-toggle">
                  Pages
                </a>
                <ul className="dropdown-menu" style={{ display: "none" }}>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home One
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home Two
                    </a>
                  </li>
                </ul>
                <a
                  href="/"
                  className="mean-expand"
                  style={{ fontSize: "18px" }}
                >
                  +
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link dropdown-toggle">
                  Shop
                </a>
                <ul className="dropdown-menu" style={{ display: "none" }}>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home One
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home Two
                    </a>
                  </li>
                </ul>
                <a
                  href="/"
                  className="mean-expand"
                  style={{ fontSize: "18px" }}
                >
                  +
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link dropdown-toggle">
                  News
                </a>
                <ul className="dropdown-menu" style={{ display: "none" }}>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home One
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home Two
                    </a>
                  </li>
                </ul>
                <a
                  href="/"
                  className="mean-expand"
                  style={{ fontSize: "18px" }}
                >
                  +
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item contact-number">
                <a href="/" className="nav-link">
                  <i className="fa fa-phone"></i>
                  +254-789-417
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="/" className="logo">
          <img src={gianoLogo} alt="Keg & Draught Logo" />
        </a>
      </div>
      <div className="main-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={gianoLogo} alt="Keg & Draught Logo" />
            </a>
            <div className="mean-push"></div>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
              style={{ display: "none" }}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link dropdown-toggle active">
                    Home
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home Two
                      </a>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="mean-expand"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link dropdown-toggle">
                    Pages
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home Two
                      </a>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="mean-expand"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link dropdown-toggle">
                    Shop
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home Two
                      </a>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="mean-expand"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Event
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link dropdown-toggle">
                    News
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home Two
                      </a>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="mean-expand"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item contact-number">
                  <a href="/" className="nav-link">
                    <i className="fa fa-phone"></i>
                    +254-789-417
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
