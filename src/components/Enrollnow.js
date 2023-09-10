import React from "react";
import { useState } from "react";
import "../styles/EnrollNow.css";

const Enrollnow = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  return (
    <div className="enroll">
      <h1> Enroll me </h1>
      <h4>
        Contact me below to find out more about how you can benefit me from
        coaching.
      </h4>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <div
          className="mb-4 align-middle"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <label className="label">Name</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />
        </div>
        <div
          className="mb-4 align-middle"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
        </div>
        <div
          className="mb-4 align-middle"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
        </div>
        <div
          className="mb-4 align-middle"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enrollnow;
