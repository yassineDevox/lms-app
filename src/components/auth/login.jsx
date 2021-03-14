import React from 'react'
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="container p-5">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title"> ADMIN PANEL</div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" className="form-control" i />
                  </div>
                  <div className="loginbttm">
                    <div className="d-flex justify-content-between align-items-center login-button ">
                      <Link to="/register"><span className="text-white"> Create an account ? </span></Link>
                      <button
                        type="submit"
                        className="btn btn-outline-warning "
                      >
                        LOGIN
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
    )
}
