import React, { useState, useEffect, useCallback } from "react";
import "../styles/AboutUs.css";
import "../styles/Home.css";
import ButtonComp from "../components/ButtonComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import classImg from "../assets/images/slider/ClassRoom.jpg";
import sehImg from "../assets/images/slider/seh.jpg";
import jiraWFImg from "../assets/images/slider/JiraWorkflow.png";
import ckaCertImg from "../assets/images/slider/CkaCert.jpg";
import utetImg from "../assets/images/slider/UTET.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const imageArray = [classImg, sehImg, jiraWFImg, ckaCertImg, utetImg];

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  }, [imageArray.length]);

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + imageArray.length) % imageArray.length
    );
  }, [imageArray.length]);

  useEffect(() => {
    const interval = setInterval(handleNextImage, 3000);
    return () => clearInterval(interval);
  }, [handleNextImage]);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="row">
      <div className="column image-container">
        <img
          alt="classImg"
          src={imageArray[currentImageIndex]}
          className="image"
        />
        <button className="btn-left" onClick={handlePreviousImage}>{"<<"}</button>
        <button className="btn-right" onClick={handleNextImage}>{">>"}</button>
      </div>
      <div className="column content-container">
        <div>
          <h1>SuccessEduHub classes</h1>
          <p>A platform to make your career bright.</p>
          <ButtonComp type="submit" label="Enroll Now" />
        </div>
      </div>

      {/* Chatbot icon in the bottom-right */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <FontAwesomeIcon icon={faRobot} size="2x" />
      </div>

      {/* Chatbot UI */}
      {isChatOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>SEH Chatbot</h3>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chatbot-messages">
            <p>Hi! How can I help you?</p>

            {/* Link to SEH Generative AI Page */}
            <a href="http://localhost:8000/seh-generative-ai/blogs/" className="chatbot-link" target="_blank" rel="noopener noreferrer">
              Visit SEH Generative AI Page
            </a>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
