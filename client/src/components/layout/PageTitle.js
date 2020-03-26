import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const PageTitle = ({ history }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location
      setActiveLink(`${location.pathname}`);
    });
  }, [history]);
  return (
    <div className="page-title-area item-bg-2">
      <div className="container">
        <div className="page-title-content">
          <h2>
            {activeLink === "/about"
              ? "About Us"
              : activeLink === "/contact"
              ? "Contact Us"
              : "News & Updates"}
          </h2>
          <ul>
            <li>
              <Link to="/">
                Home
                <i className="fa fa-chevron-right"></i>
              </Link>
            </li>
            <li>
              {activeLink === "/about"
                ? "About"
                : activeLink === "/contact"
                ? "Contact"
                : "Blog"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PageTitle);
