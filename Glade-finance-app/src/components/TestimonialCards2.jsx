import React from 'react'
import './TestimonialCard2.css'


const TestimonialCards2 = () => {
  return (
    <div className='main-card-container'>
      <div className='left-card-container'>
        <div className='left-card-content'>
          <div className='left-card-details'>
            <div className='top-details'>
              <img className='profile-image' src='https://gladefinance.co/images/testimonial-3.svg'/>
              <div className='details'>
                <h6>Ango Mustapha</h6>
                <p className='job'>Mustees Clothing</p>
                <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
              </div>
            </div>
            <p className='testimonial1-left-card-text'>
              "Gladefinance has helped my business grow in all forms, from creating invoices easily to accepting payments seamlessly and so much more.
               Indeed running a business in Nigeria is less stressful with Gladefinance."
              </p>
          </div>
        </div>
      </div>
      <div className='right-card-container'>
        <div className='right-card-content'>
          <div className='right-card-details'>
            <div className='top-details'>
              <img className='profile-image' src='https://gladefinance.co/images/testimonial-4.svg'/>
              <div className='details'>
                <h6>Abel Adugam Nibori</h6>
                <p className='job'>Melting Moments</p>
              <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
            </div>
            </div>
            <p className='testimonial1-right-card-text'>
                "Gladefinance has been the perfect growth partner, providing us with business accounts and payments that have made it possible for me to scale my business.
                I recommend Gladefinance to every business owner looking to take their business to the next level."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards2
