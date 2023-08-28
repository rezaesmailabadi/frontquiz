import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";



const MainLayout = props => {
    
    return (
        <Fragment>
            <header id="header-section">
        <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
          <div className="container">
            <div className="navbar-brand-wrapper d-flex w-100">
              <img src="assets/images/Group2.svg" alt="" />
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="mdi mdi-menu navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse navbar-menu-wrapper"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
                <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                  <div className="navbar-collapse-logo">
                    <img src="assets/images/Group2.svg" alt="" />
                  </div>
                  <button
                    className="navbar-toggler close-button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="mdi mdi-close navbar-toggler-icon pl-5"></span>
                  </button>
                </li>
                <li className="nav-item btn-contact-us pl-4 pl-lg-0">
                  
                  
                  <NavLink
                    to="/login/admin"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Admin Login
                  </NavLink>


                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="banner">
        <div className="container">
          <h1 className="font-weight-semibold">
            Welcome to site
          </h1>
          <h6 className="font-weight-normal text-muted pb-3">
            Create and take students assesment tests in very reliable and fast
            way
          </h6>
          <div>
            <NavLink to="/login" className="btn btn-opacity-light mr-1">
              <b>Student Login</b>
            </NavLink>
            <NavLink to="/register" className="btn btn-opacity-success ml-1">
              <b>Student Register</b>
            </NavLink>
          </div>
          <img src="assets/images/Group171.svg" alt="" className="img-fluid" />
        </div>
      </div>
        </Fragment>
    );
};

export default MainLayout;
