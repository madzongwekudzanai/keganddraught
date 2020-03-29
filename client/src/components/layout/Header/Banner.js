import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center banner-text-wrap">
              <div className="col-lg-6">
                <div className="banner-video">
                  <div className="video-wrap">
                    <div className="video-btn-wrap">
                      <Link to="/" className="video-btn popup-youtube">
                        <i className="flaticon-play-button"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-text">
                  <span>Portable</span>
                  <h1>Draught Units</h1>
                  <p>
                    Portable, affordable, easy to operate, unlimited beer
                    selection and cold beer instantly.
                  </p>
                  <Link to="/about" className="default-btn">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
