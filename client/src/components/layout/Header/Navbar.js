import React, { useState, useEffect, Fragment } from "react";
import gianoLogo from "../coverimages/giano-logo.png";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

const Navbar = ({ history, logout, auth: { isAuthenticated, loading } }) => {
  const [expandNav, setExpandNav] = useState(false);
  const toggleNavbar = () => {
    setExpandNav(!expandNav);
  };
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location

      setActiveLink(`${location.pathname}`);
    });
    console.log(activeLink);
  }, [activeLink, history]);
  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav mean-container">
        <div className="mean-bar">
          <a
            onClick={toggleNavbar}
            className="meanmenu-reveal"
            style={{ right: "0", left: "auto" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav className="mean-nav">
            <ul
              className="navbar-nav ml-auto"
              style={{ display: expandNav ? "flex" : "none" }}
            >
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={toggleNavbar}
                  className={`nav-link ${activeLink === "/" ? "active" : null}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  onClick={toggleNavbar}
                  className={`nav-link ${
                    activeLink === "/about" ? "active" : null
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  onClick={toggleNavbar}
                  className={`nav-link ${
                    activeLink === "/blog" ? "active" : null
                  }`}
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  onClick={toggleNavbar}
                  className={`nav-link ${
                    activeLink === "/contact" ? "active" : null
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Hire
                </Link>
              </li>
              {!loading && (
                <Fragment>
                  {isAuthenticated ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <Fragment>
                      <li className="nav-item">
                        <Link
                          to="/login"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            activeLink === "/login" ? "active" : null
                          }`}
                        >
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/register"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            activeLink === "/register" ? "active" : null
                          }`}
                        >
                          Sign Up
                        </Link>
                      </li>
                    </Fragment>
                  )}
                </Fragment>
              )}
              <li className="nav-item contact-number">
                <Link to="/contact" className="nav-link">
                  <i className="fa fa-phone"></i>
                  +254-789-417
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/" className="logo">
          <img src={gianoLogo} alt="Keg & Draught Logo" />
        </Link>
      </div>
      <div className="main-nav">
        <nav className="navbar navbar-expand-md navbar-light is-sticky">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={gianoLogo} alt="Keg & Draught Logo" />
            </Link>
            <div className="mean-push"></div>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
              style={{ display: "none" }}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={toggleNavbar}
                    className={`nav-link ${
                      activeLink === "/" ? "active" : null
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    onClick={toggleNavbar}
                    className={`nav-link ${
                      activeLink === "/about" ? "active" : null
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    onClick={toggleNavbar}
                    className={`nav-link ${
                      activeLink === "/blog" ? "active" : null
                    }`}
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    onClick={toggleNavbar}
                    className={`nav-link ${
                      activeLink === "/contact" ? "active" : null
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Hire
                  </Link>
                </li>
                {!loading && (
                  <Fragment>
                    {isAuthenticated ? (
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    ) : (
                      <Fragment>
                        <li className="nav-item">
                          <Link
                            to="/login"
                            onClick={toggleNavbar}
                            className={`nav-link ${
                              activeLink === "/login" ? "active" : null
                            }`}
                          >
                            Log In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/register"
                            onClick={toggleNavbar}
                            className={`nav-link ${
                              activeLink === "/register" ? "active" : null
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </Fragment>
                    )}
                  </Fragment>
                )}
                <li className="nav-item contact-number">
                  <Link to="/contact" className="nav-link">
                    <i className="fa fa-phone"></i>
                    +254-789-417
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
