import React from 'react';
import "../styles/Banner.css"; // Assuming you have a dedicated CSS file for the banner
import bannerImage from "../assets/images/banner/banner-image.png"; // Assuming the banner image is stored here

export default function Banner() {
  return (
    <div className="banner">
      <a href="https://www.mongodb.com/events/mongodb-local/london?tck=docs_banner" 
         title="Get 50% off your ticket to SEH India classes. Use code SEH50"
         target="_blank" // Opens in a new tab
         rel="noopener noreferrer" // Security best practices for external links
      >
      <img 
        src={bannerImage} 
        alt="Get 50% off your ticket to SEH India classes. Use code SEH50" 
        className="banner-image"
      />
      </a>
    </div>
  );
}
