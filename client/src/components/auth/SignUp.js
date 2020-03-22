import React from "react";

const SignUp = () => {
  return (
    <section className="sign-up-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 p-0">
            <div className="sign-up-bg"></div>
          </div>
          <div className="col-lg-6 col-md-6 p-0">
            <div className="sign-up-form">
              <h3>Create your Account</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
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
                        type="password"
                        placeholder="Password"
                        className="form-control"
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
                      <a href="/">Login!</a>
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <ul className="social-list">
                      <li>
                        <a href="/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
