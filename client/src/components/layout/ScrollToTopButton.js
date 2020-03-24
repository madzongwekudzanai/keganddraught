import React from "react";

const ScrollToTopButton = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      id="myBtn"
      className="go-top"
    >
      <i className="fa fa-angle-double-up"></i>
      <i className="fa fa-angle-double-up"></i>
    </div>
  );
};

export default ScrollToTopButton;
