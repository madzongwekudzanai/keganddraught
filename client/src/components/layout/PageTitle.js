import React from "react";

const PageTitle = () => {
  return (
    <div className="page-title-area item-bg-2">
      <div className="container">
        <div className="page-title-content">
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="/">
                Home
                <i className="fa fa-chevron-right"></i>
              </a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
