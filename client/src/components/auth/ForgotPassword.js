import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Social from "./Social";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const ForgotPassword = ({ setAlert, auth }) => {
  const [email, setEmail] = useState("");
  const onChange = e => {
    setEmail(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/forgot", {
        email
      });
      setAlert(
        "Account reset link has been sent to your email",
        "success",
        10000
      );
      setEmail("");
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
                  <h3>Forgot Your Password</h3>
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
                            onChange={e => onChange(e)}
                            value={email}
                            required
                            type="email"
                            placeholder="Email Address"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-3">
                        <button type="submit" className="btn default-btn">
                          Send Email
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <p>
                          <Link to="/">Go to home page</Link>
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

ForgotPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert })(ForgotPassword);
