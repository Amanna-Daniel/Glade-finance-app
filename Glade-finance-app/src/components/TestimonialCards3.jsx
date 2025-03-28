import React from 'react'
import './TestimonialCards3.css'

const TestimonialCards3 = ({className}) => {
  return (
    <div className='main-card-container'>
    <div className='left-card3-container'>
      <div className='left-card3-content'>
        <div className='left-card3-details'>
          <div className='top-details'>
            <img className='profile-image' src='https://gladefinance.co/images/testimonial-5.svg'/>
            <div className='details'>
              <h6>Apostle Landlord</h6>
              <p className='job'>Salescraft Limited</p>
              <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
            </div>
          </div>
            <p className='testimonial1-left-card-text'>
              "Gladefinance has contributed massively to the success of my business. 
              The invoicing and expense management features helped me track my sales and expenses better, and I realized it was easier to track my revenue.
              I now do all of my payment and banking operations on Gladefinance, and it’s been a game changer for my business."
            </p>
        </div>
      </div>
    </div>
    <div className='right-card3-container'>
      <div className='right-card3-content'>
        <div className='right-card3-details'>
          <div className='top-details'>
            <img className='profile-image' src='https://gladefinance.co/images/testimonial-6.svg'/>
            <div className='details'>
              <h6>Grace</h6>
              <p className='job'>Gracias Kitchen</p>
            <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
          </div>
          </div>
            <p className='testimonial1-right-card-text'>"I had hesitated to try out a new fintech startup service for my business because I was concerned about the financial impact.
               But surprisingly, the fees at Gladefinance are incredibly competitive and transparent. I’ve recommended Gladefinance to a few of my business owners’ friends, who are also impressed."
            </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TestimonialCards3
