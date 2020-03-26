import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <section className="contact-info-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Whatever your needs, we're looking forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="contacts-info">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <ul className="contacts-text">
                    <li>
                      <i className="fa fa-phone"></i>
                      <span>Phone</span>
                      <Link to="/contact">+25462755, 265497466</Link>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <span>Email</span>
                      <Link to="/contact">giano@gmail.com</Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <span>Address</span>
                      <Link to="/contact">
                        25 Street, west Cruch, Newzeland
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
