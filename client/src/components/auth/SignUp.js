import React, { useState, Fragment } from "react";
import Social from "./Social";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const SignUp = ({ setAlert, auth }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const { name, email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/users", {
        name,
        email,
        password
      });
      setAlert("Account created, please verify your email", "success", 10000);
      setFormData({
        ...formData,
        name: "",
        email: "",
        password: ""
      });
    } catch (err) {
      setAlert("Invalid credentials", "danger");
    }
  };
  return (
    <Fragment>
      {auth.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <section className="sign-up-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 p-0">
                <div className="sign-up-bg"></div>
              </div>
              <div className="col-lg-6 col-md-6 p-0">
                <div className="sign-up-form">
                  <h3>Create your Account</h3>
                  <form
                    onSubmit={e => {
                      onSubmit(e);
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => {
                              onChange(e);
                            }}
                            placeholder="Your Name"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => {
                              onChange(e);
                            }}
                            placeholder="Email Address"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => {
                              onChange(e);
                            }}
                            placeholder="Password"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-3">
                        <button type="submit" className="btn default-btn">
                          Sign Up
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <p>
                          Already a registered user?
                          <Link to="/login">Login!</Link>
                        </p>
                      </div>
                      <Social />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(SignUp);
