import React from "react";
import errImg from "../layout/coverimages/404.jpg";

const NotFound = () => {
  return (
    <div className="error-area">
      <div className="d-table">
        <div className="error-contant-wrap">
          <img src={errImg} alt="404" />
          <h3>Oops! Page Not Found</h3>
          <p>The page you were looking for could not be found.</p>
          <a href="/" className="default-btn">
            Return Home page
            <i className="flaticon-right-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
