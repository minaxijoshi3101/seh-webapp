import React from "react";
import "../styles/Search.css";
import { useNavigate } from 'react-router-dom';

const Search = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    navigate("/my-story"); // Use navigate function to change the route
  };

  return (
    <div className="container-fluid mx-auto" style={{ width: "50%" }}>
      <form className="d-flex" role="search" onSubmit={formSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Search Resources"
          aria-label="Search"
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}

        <button
          className="btn btn-outline-success margin-left margin-right"
          type="submit"
        >
          Search
        </button>
        
        <div
          className="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-40"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            marginLeft: "1px",
            cursor: "pointer",
          }}
          onClick={handleClick} // Attach click handler to the div
        >
          <div style={{ width: "40px", height: "40px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-vector-pen"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
              />
              <path
                fillRule="evenodd"
                d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
              />
            </svg>
          </div>
          <span style={{ whiteSpace: "nowrap", marginLeft: "5px", cursor: 'pointer' }}>
            write your own
          </span>
        </div>
      </form>
    </div>
  );
};

export default Search;
