import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Person4Icon from "@mui/icons-material/Person4";
import { lightGreen } from "@mui/material/colors";
//import Banner from "./Banner"

import "../styles/Navbar.css";

const Navbar = (props) => {
  return (
    <React.Fragment>
      {/* <Banner/> */}
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="leftSide">
            <a className="navbar-brand" href="/#">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="25"
                className="d-inline-block align-text-top"
              />
              {props.title}
            </a>
          </div>
          <div className="rightSide"></div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subjects">
                  Subjects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Person4Icon
                  style={{ backgroundColor: lightGreen[500] }}
                  sx={{ fontSize: "40px" }}
                  onClick={(event) => (window.location.href = "pagelink")}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg"></div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
