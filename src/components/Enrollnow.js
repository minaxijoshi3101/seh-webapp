import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import axios from "axios";
import "../styles/EnrollNow.css";
import user_icon from "../assets/images/EnrollNow/person.png";
import email_icon from "../assets/images/EnrollNow/email.png";
import password_icon from "../assets/images/EnrollNow/password.png";
import mobile_icon from "../assets/images/EnrollNow/mobile.png";
//import { signUp } from "../services/enroll-student";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MOBILE_REGEX =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/gim;
//const REGISTER_URL = "/register";

const Enrollnow = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [studentData, setData] = useState({
    name: "",
    password: "",
    mobile: "",
    email: "",
  });
  //const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  // const newStudent = {
  //   student_name,
  //   student_password,
  //   student_mobile,
  //   student_email,
  // };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(studentData.name));
  }, [studentData.name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(studentData.email));
  }, [studentData.email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(studentData.password));
    setValidMatch(studentData.password === matchPwd);
  }, [studentData.password, matchPwd]);

  useEffect(() => {
    setValidMobile(MOBILE_REGEX.test(studentData.mobile));
  }, [studentData.mobile]);

  useEffect(() => {
    setErrMsg("");
  }, [studentData.name, studentData.password, matchPwd]);

  //handle change dynamically
  const handleChange = (event, property) => {
    setData({ ...studentData, [property]: event.target.value });
  };
  // Handling the student_name change
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // // Handling the student_email change
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // // Handling the password change
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleMatchPassword = (e) => {
    setMatchPwd(e.target.value);
  };
  // const handleMobile = (e) => {
  //   setMobile(e.target.value);
  // };

  // Handling the form submission - sync - no other operation - blocking
  //async - parallel - wont block -
  const handleSubmit = async (e) => {
    console.log("inside handle submit");
    e.preventDefault();
    const v1 = USER_REGEX.test(studentData.name);
    const v2 = PWD_REGEX.test(studentData.password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await fetch("https://localhost:8443/api/v1/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_name: studentData.name,
          student_password: studentData.password,
          student_mobile: studentData.mobile,
          student_email: studentData.email,
        }),
      });
      setSuccess(true);
      // result
      //   .then((data) => {
      //     setSuccess(true);
      //   })
      //   .catch((error) => console.log(error));
    } catch (error) {
      console.log("User registration failed....");
    }

    // const result = await fetch(
    //   "http://localhost:8080/api/v1/student/register",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(studentData),
    //   }
    // );

    //const resultJSON = await result.JSON();
    //console.log(result);
    //const objectArray = Object.fromEntries(studentData);

    // signUp(studentData)
    //.then((response) => {
    //   //     console.log(response);
    //   //     console.log("success!!");
    //   //     setSuccess(true);
    //   //   })
    //   //   .catch((err) => {
    //   //     console.log(err);
    //   //   });
    // try {
    //   console.log("inside try");
    //   //const array = Object.entries(studentData);
    //   console.log(typeof studentData.name);
    //   //console.log(Object.fromEntries(array));
    //   const studentArr = Object.entries(studentData);
    //   console.log(studentArr);
    //   console.log(studentArr["name"]);
    //   axios.post(
    //     "http://localhost:8080/api/v1/student/register",
    //     {
    //       student_name: studentArr["name"],
    //       student_password: studentArr["password"],
    //       student_mobile: studentArr["mobile"],
    //       student_email: studentArr["email"],
    //     }
    //     // student_name: studentData.student_name,
    //     // student_password: studentData.student_password,
    //     // student_mobile: studentData.student_mobile,
    //     // student_email: studentData.student_email,
    //   );
    //   setSuccess(true);
    // } catch (error) {
    //   console.log("User registration failed....");
    // }
  };
  return (
    <>
      {success ? (
        <section>
          <h4>User successfully registered!!</h4>
          <p>
            <a href="www.google.com">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <div className="header">
            <div className="text">Enroll me</div>
            <h4>
              Contact me below to find out more about how you can benefit me
              from coaching.
            </h4>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form name="enrollStudent" id="enrollmentForm">
              {/* Labels and inputs for form data */}
              <div className="container">
                <div className="underline">
                  <div className="inputs">
                    <div className="input">
                      <img src={user_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validName ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validName || !studentData.name ? "hide" : "invalid"
                        }
                      />
                      <input
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => handleChange(e, "name")}
                        value={studentData.name}
                        type="text"
                        placeholder="Name"
                        name="student_name"
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          userFocus && studentData.name && !validName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, numbers, underscores, hyphens allowed.
                      </p>
                    </div>
                    <div className="input">
                      <img src={email_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validEmail ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validEmail || !studentData.email ? "hide" : "invalid"
                        }
                      />
                      <input
                        onChange={(e) => handleChange(e, "email")}
                        value={studentData.email}
                        type="email"
                        placeholder="Email"
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          emailFocus && studentData.email && !validEmail
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter a valid email address.
                      </p>
                    </div>

                    <div className="input">
                      <img src={password_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validPwd || !studentData.password ? "hide" : "invalid"
                        }
                      />
                      <input
                        onChange={(e) => handleChange(e, "password")}
                        value={studentData.password}
                        type="password"
                        id="student_password"
                        placeholder="Password"
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                      <p
                        id="pwdnote"
                        className={
                          pwdFocus && !validPwd ? "instructions" : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                      </p>
                    </div>
                    <div className="input">
                      <img src={password_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                      <input
                        onChange={handleMatchPassword}
                        id="confirm_pwd"
                        type="password"
                        placeholder="Confirm Password"
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                      <p
                        id="confirmnote"
                        className={
                          matchFocus && !validMatch
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                      </p>
                    </div>
                    <div className="input">
                      <img src={mobile_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMobile ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validMobile || !studentData.mobile
                            ? "hide"
                            : "invalid"
                        }
                      />
                      <input
                        onChange={(e) => handleChange(e, "mobile")}
                        value={studentData.mobile}
                        type="text"
                        placeholder="Mobile"
                        required
                        aria-invalid={validMobile ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setMobileFocus(true)}
                        onBlur={() => setMobileFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          mobileFocus && studentData.mobile && !validMobile
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter valid Mobile number with country code.
                      </p>
                    </div>
                    {/* <div className="forgot-password">
                Lost Password? <span>Click here</span>
              </div> */}
                    {/* <div className="submit-container"> */}
                    {/* <div className="submit" onClick={handleSubmit}> */}
                    <button
                      type="submit"
                      className="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="www.google.com">Sign In</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Enrollnow;
