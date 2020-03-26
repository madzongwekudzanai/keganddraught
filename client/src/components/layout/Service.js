import React from "react";
import serviceShape from "./coverimages/service-shape.png";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className="service-area ptb-100-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-service">
              <div className="service-shape">
                <img src={serviceShape} alt="Service" />
                <i className="flaticon-shipped"></i>
              </div>
              <h3>Free Shipping & Return</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet illum aliquam eaque doloribus modi neque.
              </p>
              <Link to="/about" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service">
              <div className="service-shape">
                <img src={serviceShape} alt="Service" />
                <i className="flaticon-guarantee"></i>
              </div>
              <h3>Money Back Guarantee</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet illum aliquam eaque doloribus modi neque.
              </p>
              <Link to="/about" className="read-more">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-service">
              <div className="service-shape">
                <img src={serviceShape} alt="Service" />
                <i className="flaticon-customer-service"></i>
              </div>
              <h3>Online Support 24/7</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet illum aliquam eaque doloribus modi neque.
              </p>
              <Link to="/about" className="read-more">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
