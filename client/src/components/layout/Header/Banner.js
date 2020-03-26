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
                  <span>Delightful</span>
                  <h1>Dinner Emotions</h1>
                  <p>
                    Wine improves the age, the older it gets, the better you
                    like it.
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
