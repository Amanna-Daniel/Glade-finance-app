import React, { useState, useEffect } from 'react';
import './Testimony.css';
import TestimonialCards1 from './TestimonialCards1';
import TestimonialCards2 from './TestimonialCards2';
import TestimonialCards3 from './TestimonialCards3';

const Testimony = () => {
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
          <h2 className="head-text">Don't Take our word for it</h2>
          <p className="sub-texts">Read what other business owners say about our product</p>
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

export default Testimony;




// import React from 'react'
// import './Testimony.css'
// import TestimonialCards1 from './TestimonialCards1'
// import TestimonialCards2 from './TestimonialCards2'
// import TestimonialCards3 from './TestimonialCards3'
// // import TestimonialCardData from './TestimonialCardData'


// // import React, { useState, useEffect } from 'react';
// // import './Testimony.css';
// // import TestimonialCards1 from './TestimonialCards1';
// // import TestimonialCards2 from './TestimonialCards2';
// // import TestimonialCards3 from './TestimonialCards3';

// const Testimony = () => {
//   const [slideIndex, setSlideIndex] = useState(1);
//   const slides = [TestimonialCards1, TestimonialCards2, TestimonialCards3];

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, [slideIndex]);

//   function currentSlide(n) {
//     setSlideIndex(n);
//   }

//   function showSlides(n) {
//     if (n > slides.length) {
//       setSlideIndex(1);
//     } else if (n < 1) {
//       setSlideIndex(slides.length);
//     }
//   }

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="texts">
//           <h2 className="head-text">Don't Take our word for it</h2>
//           <p className="sub-text">Read what other business owners say about our product</p>
//         </div>
//         <div className="testimonial-carousel">
//           <div className="carousel-slide">
//             {slides.map((Component, index) => (
//               <div key={index} className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}>
//                 <Component />
//               </div>
//             ))}
//           </div>
//           <div className="carousel">
//             {slides.map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
//                 onClick={() => currentSlide(index + 1)}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimony;
























// let slideIndex = 1;
// showSlides(slideIndex);

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dots");

//   if (n > slides.length) {
//     slideIndex = 1; // Loop back to the first slide
//   }
  
//   if (n < 1) {
//     slideIndex = slides.length; // Loop back to the last slide
//   }

//   // Hide all slides
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Remove active class from all dots
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("active");
//   }

//   // Display the correct slide and set the active dot
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].classList.add("active");
// }


// const Testimony = () => {
//   return (
//    <section className='testimonial-section'>
//     <div className='testimonial-container'>
//       <div className='texts'>
//          <h2 className='head-text'>
//           Don't Take our word for it
//          </h2>
//          <p className='sub-text'>Read what other business owners say about our product</p>
//       </div>
//       <div className='testimonial-carousel'>
//         <div className='carousel-slide'>
//           <TestimonialCards1 className="mySlides fade"/>
//           <TestimonialCards2 className="mySlides fade"/>
//           <TestimonialCards3 className="mySlides fade"/>
//         </div>
//         <div className='carousel' >
//           <span className='dot' onClick={currentSlide}></span>
//           <span className='dot' onClick={currentSlide}></span>
//           <span className='dot' onClick={currentSlide}></span>
//         </div>
//       </div>
//     </div>
//    </section>
//   )
// }

// export default Testimony
