import React, { useState, useEffect, useCallback } from "react";
import "../styles/AboutUs.css";
import "../styles/Home.css";
import ButtonComp from "../components/ButtonComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import classImg from "../assets/images/slider/ClassRoom.jpg";
import sehImg2 from "../assets/images/slider/seh.jpg";
import jiraWFImg from "../assets/images/slider/JiraWorkflow.png";
import ckaCertImg from "../assets/images/slider/CkaCert.jpg";
import utetImg from "../assets/images/slider/UTET.jpg";
import sehImg1 from "../assets/images/slider/img1.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const imageArray = [sehImg1, classImg, sehImg2, jiraWFImg, ckaCertImg, utetImg];

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
            <a href="http://localhost:8000/seh-generative-ai/blogs/" className="chatbot-link" target="_blank" rel="noopener noreferrer">
              Visit SEH Generative AI Page for SEH techBot
            </a>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chatbot-messages">
            <iframe
              allow="microphone;"
              width="100%"
              height="100%"
              src="https://console.dialogflow.com/api-client/demo/embedded/7146cc72-947e-41d6-b1e5-29a918d51041"
              title="SEH Chatbot"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
