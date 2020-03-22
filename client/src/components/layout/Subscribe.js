import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe-area">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Subscribe To Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="widget subscribe">
              <form className="search-form">
                <label>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Enter your email address"
                  />
                </label>
                <input
                  type="submit"
                  className="search-submit default-btn"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
