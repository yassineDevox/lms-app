import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fas fa-sign-in-alt" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">ADMIN PANEL</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">LASTNAME</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={props.handleChange}
                    name="lastname"
                  />
                </div>{" "}
                <div className="form-group">
                  <label className="form-control-label">FIRSTNAME</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={props.handleChange}
                    name="firstname"
                  />
                </div>{" "}
                <div className="form-group">
                  <label className="form-control-label">EMAIL ADRESS</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={props.handleChange}
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={props.handleChange}
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">REPEAT PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={props.handleChange}
                    name="repeatedPassword"
                  />
                </div>
                <div className="loginbttm">
                  <div className="d-flex justify-content-between align-items-center login-button ">
                    <Link to="/">
                      <span className="text-white">
                        {" "}
                        Already have an account ?
                      </span>
                    </Link>

                    <button type="submit" className="btn btn-outline-warning ">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
}
