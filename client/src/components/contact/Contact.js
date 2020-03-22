import React from "react";

const Contact = () => {
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
        <form id="contact-form">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                  placeholder="Your First Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name-2"
                  required
                  placeholder="Your Last Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="name"
                  id="exampleInputEmail1"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
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

export default Contact;
