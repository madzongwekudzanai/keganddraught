import React, { useState } from "react";
import Social from "./Social";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const SignIn = ({ auth: { isAuthenticated }, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="sign-up-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 p-0">
            <div className="sign-up-bg"></div>
          </div>
          <div className="col-lg-6 col-md-6 p-0">
            <div className="sign-up-form">
              <h3>Log In</h3>
              <form
                onSubmit={e => {
                  onSubmit(e);
                }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        value={email}
                        required
                        onChange={e => {
                          onChange(e);
                        }}
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        name="password"
                        value={password}
                        required
                        onChange={e => {
                          onChange(e);
                        }}
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn default-btn">
                      Login
                    </button>
                  </div>
                  <div className="col-lg-12">
                    <p>
                      <Link to="reset">Forgot your password?</Link>
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
  );
};

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(SignIn);
