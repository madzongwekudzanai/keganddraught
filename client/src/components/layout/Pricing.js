import React from "react";
import est from "./coverimages/est.png";
import estate from "./coverimages/estate.png";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="estate-area ptb-100">
      <div className="container">
        <div className="estate-area-wrap">
          <div className="row">
            <div className="col-lg-6 pr-0">
              <div className="estate-wrapper">
                <div className="estate-text">
                  <span>Event hosting</span>
                  <h2>Venue & Private Events</h2>
                  <p>
                    Desire is the key to motivation, but it’s determination and
                    commitment to an unrelenting pursuit of your goal -- a
                    commitment to excellence -- that will enable you to attain
                    the success you seek.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-sm-6">
                    <span className="estate-list">
                      <i className="flaticon-right-arrow"></i>
                      Wine Club Pick-up Social
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="estate-price">
                      <p>
                        $24 <span>/(Per Person)</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-6">
                    <span className="estate-list">
                      <i className="flaticon-right-arrow"></i>
                      Summer Solstice Party
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="estate-price">
                      <p>
                        $27 <span>/(Per Person)</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-6">
                    <span className="estate-list">
                      <i className="flaticon-right-arrow"></i>
                      Taste & Tours Events
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="estate-price">
                      <p>
                        $16 <span>/(Per Person)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="estate-btn">
                  <Link to="/about" className="default-btn">
                    Read More
                  </Link>
                </div>
                <div className="estate-shape">
                  <img src={est} alt="estate" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-0">
              <div className="estate-img">
                <img src={estate} alt="Estate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
