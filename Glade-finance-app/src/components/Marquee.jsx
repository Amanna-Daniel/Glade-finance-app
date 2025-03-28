import React from "react";
import "./Marquee.css"; // Import the CSS file

const images = [
  "https://gladefinance.co/images/arik_1.svg",
  "https://gladefinance.co/images/mycover_1.svg",
  "https://gladefinance.co/images/ferdicon.svg",
  "https://gladefinance.co/images/lendha-logo.svg",
  "https://gladefinance.co/images/goodtalent_1.svg",
  "https://gladefinance.co/images/versuspay_1.svg",
  "https://gladefinance.co/images/aero_1.svg",
  "https://gladefinance.co/images/sidebrief.svg",
];




const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} className="marquee-image"/> 
        ))}
        {/* {images.map((img, index) => (
          <img key={`duplicate-${index}`} src={img} alt={`slide-${index}`} className="marquee-image"/> 
        ))} */}
      </div>
    </div>
  );
};

export default Marquee;
