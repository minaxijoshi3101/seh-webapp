import React, { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import AboutUs from "./components/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Enrollnow from "./components/Enrollnow";
import Blogs from "./pages/Blogs";
import Story from "./pages/Story";

function LoadingBarComponent() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    ref.current.continuousStart();
    
    setTimeout(() => {
      ref.current.complete();
    }, 500);
  }, [location]);

  return (
    <div>
      <LoadingBar color='#f11946' ref={ref} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <LoadingBarComponent />
        <Navbar title="SuccessEduHub" aboutText="About Us" />
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/enroll" element={<Enrollnow />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/my-story" element={<Story />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
