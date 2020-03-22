import React from "react";
import welcome from "./coverimages/welcome.png";
import signature from "./coverimages/signature.png";

const Welcome = () => {
  return (
    <section className="welcome-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="welcome-img">
              <img src={welcome} alt="Welcome" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="welcome-text">
              <span>Welcome To</span>
              <h2>Wine & Winary Collections</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <div className="signature">
                <img src={signature} alt="Signature" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="contact-info-wrap">
              <div className="row">
                <div className="col-lg-4 col-sm-6 p-0">
                  <div className="contact-info">
                    <i className="fa fa-phone"></i>
                    <span>(Hot Line)</span>
                    <h3>(00) 123 456 789</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-0">
                  <div className="contact-info border-left-right">
                    <i className="fa fa-clock-o"></i>
                    <span>We’re Open</span>
                    <h3>Mon-Sat: 8 AM - 10PM</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                  <div className="contact-info">
                    <i className="fa fa-arrow-right"></i>
                    <span>Follow Us</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
