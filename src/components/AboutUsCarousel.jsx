import React, { useState, useCallback, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

// Import images directly
import amita from '../assets/images/CarouselAboutUs/amita.jpg';
import deepanshu from '../assets/images/CarouselAboutUs/deepanshu.jpg';
import minaxi from '../assets/images/CarouselAboutUs/minaxi.jpg';
import sumit from '../assets/images/CarouselAboutUs/sumit.jpg';
import vinita from '../assets/images/CarouselAboutUs/vinita.jpg';
import "../styles/AboutUsCarousel.css";

// Create an image mapping object
const imageMapping = {
  'amita.jpg': amita,
  'deepanshu.jpg': deepanshu,
  'minaxi.jpg': minaxi,
  'sumit.jpg': sumit,
  'vinita.jpg': vinita,
};

const AboutUsCarousel = ({ data }) => {
  // Ensure that data.slides is always checked at the beginning of the component
  const slides = Array.isArray(data.slides) ? data.slides : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define callback functions for handling previous and next slides
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [handleNext]);

  if (slides.length === 0) {
    console.error('Slides data is not valid:', data);
    return <div>No slides available</div>;
  }

  return (
    <div className="carousel-container">
      <BsArrowLeftCircleFill className="carousel-control left" onClick={handlePrevious} />
      <img
        src={imageMapping[slides[currentIndex].src]}  // Dynamically map the src from JSON
        alt={slides[currentIndex].alt}
        className='slide'
      />
      <BsArrowRightCircleFill className="carousel-control right" onClick={handleNext} />
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsCarousel;
