import React from "react";
import "../styles/Story.css";

export default function Story() {
  return (
    <div className="page-container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
      />
      <div className="text-area-container">
        <button className="publish-button">Launch</button>
        <textarea
          className="title-textarea"
          id="textAreaExample6"
          placeholder="Title"
        ></textarea>
        <textarea
          className="full-page-textarea"
          id="textAreaExample6"
          placeholder="Tell Your Tale..."
        ></textarea>
      </div>
    </div>
  );
}
