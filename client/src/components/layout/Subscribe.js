import React, { useState } from "react";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import axios from "axios";

const Subscribe = ({ setAlert }) => {
  const [email, setEmail] = useState("");
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact/newsletter", {
        email
      });
      setAlert("Thank you, your email has been sent", "success", 10000);
      setEmail("");
    } catch (error) {
      setAlert("Sorry, something went wrong", "danger");
    }
  };
  const onChange = e => {
    setEmail(e.target.value);
  };
  return (
    <div className="subscribe-area">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Subscribe To Newsletter</h2>
            <p>
              Whatever you do, do it well. Do it so well that when people see
              you do it they will want to come back and see you do it again and
              they will want to bring others and show them how well you do what
              you do.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="widget subscribe">
              <form onSubmit={e => onSubmit(e)} className="search-form">
                <label>
                  <input
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    type="email"
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

Subscribe.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Subscribe);
