import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Person4Icon from "@mui/icons-material/Person4";
import { lightGreen } from "@mui/material/colors";
import "../styles/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props) => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to get user initials
  const getUserInitials = (name) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  // Toggle dropdown on hover
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <React.Fragment>
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
            <ul className="navbar-nav ms-auto align-items-center">
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
                {isAuthenticated ? (
                  <div
                    style={{ position: "relative" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* User initials and icon */}
                    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                      <Person4Icon
                        style={{
                          backgroundColor: lightGreen[500],
                          marginRight: "5px",
                          fontSize: "25px",
                        }}
                      />
                      <span>{getUserInitials(user.name)}</span>
                    </div>

                    {/* Dropdown menu on hover */}
                    {dropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "0",
                          backgroundColor: "white",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          borderRadius: "5px",
                          zIndex: 1,
                          width: "120px", // Ensure consistent width for items
                        }}
                      >
                        <ul>
                          <li>
                          <Link to="/my-tales" className="nav-link">
                              My Tales
                            </Link>
                          </li>
                          <li>
                            <Link to="/my-todo" className="nav-link">
                              My ToDo List
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                logout({
                                  returnTo: window.location.origin,
                                })
                              }
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Login Button */}
                    <button
                      onClick={() => loginWithRedirect()}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Person4Icon
                        style={{
                          backgroundColor: lightGreen[500],
                          marginRight: "5px",
                        }}
                        sx={{ fontSize: "25px" }}
                      />
                      <span>Login</span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
