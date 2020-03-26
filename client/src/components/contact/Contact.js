import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";

const Contact = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const { firstName, lastName, email, subject, message } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        firstName,
        lastName,
        email,
        subject,
        message
      });
      setAlert("Thank you, your email has been sent", "success", 10000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setAlert("Sorry, something went wrong", "danger");
    }
  };
  return (
    <section className="contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Send Us an Email</h2>
              <p>We will be happy to answer you</p>
            </div>
          </div>
        </div>
        <form
          id="contact-form"
          onSubmit={e => {
            onSubmit(e);
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  onChange={e => {
                    onChange(e);
                  }}
                  value={firstName}
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="name"
                  required
                  placeholder="Your First Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  onChange={e => {
                    onChange(e);
                  }}
                  value={lastName}
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="name-2"
                  required
                  placeholder="Your Last Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  onChange={e => {
                    onChange(e);
                  }}
                  value={email}
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  onChange={e => {
                    onChange(e);
                  }}
                  value={subject}
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  value={message}
                  onChange={e => {
                    onChange(e);
                  }}
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn default-btn">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Contact);
