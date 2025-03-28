import React, { useState, useEffect } from 'react';
import './Testimony2.css';
import TestimonialCards1 from './TestimonialCards1';
import TestimonialCards2 from './TestimonialCards2';
import TestimonialCards3 from './TestimonialCards3';

const Testimony2 = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [TestimonialCards1, TestimonialCards2, TestimonialCards3];

  // Automatically show the correct slide when slideIndex changes
  useEffect(() => {
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    } else if (slideIndex < 1) {
      setSlideIndex(slides.length);
    }
  }, [slideIndex, slides.length]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="texts">
          <h2 className="head-text2">Don't Take our word for it</h2>
          <p className="sub-texts2">Read what other business owners say about our product</p>
        </div>
        <div className="testimonial-carousel">
          <div className="carousel-slide">
            {slides.map((Component, index) => (
              <div
                key={index}
                className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
                style={{ display: slideIndex === index + 1 ? 'block' : 'none' }} // Ensure only the active slide is visible
              >
                <Component />
              </div>
            ))}
          </div>
          <div className="carousel">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
                onClick={() => setSlideIndex(index + 1)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony2;