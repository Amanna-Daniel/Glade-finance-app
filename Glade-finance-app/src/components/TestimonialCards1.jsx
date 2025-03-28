import React from 'react'
import './TestimonialCards1.css'


const TestimonialCards1 = ({className}) => {
  return (
    <div className='main-card-container'>
      <div className='left-card-container'>
        <div className='left-card-content'>
          <div className='left-card-details'>
            <div className='top-details'>
              <img className='profile-image' src='https://gladefinance.co/images/testimonial-1.svg'/>
              <div className='details'>
                <h6>Abel Adugam Nibori</h6>
                <p className='job'>Versuspay</p>
                <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
              </div>
            </div>
            <p className='testimonial1-left-card-text'>
              "When it comes to handling payments, Gladefinance has always been on its feet to ensure the process is seamless,
               and whenever we encounter minor issues, the support team is swift in resolving them. 
              Speed and seamless experience are what we love about Gladefinance."</p>
          </div>
        </div>
      </div>
      <div className='right-card-container'>
        <div className='right-card-content'>
          <div className='right-card-details'>
            <div className='top-details'>
              <img className='profile-image' src='https://gladefinance.co/images/testimonial-2.svg'/>
              <div className='details'>
                <h6>Abdulhameed Yunusa</h6>
                <p className='job'>Digiverz</p>
              <img className='rating' src='https://gladefinance.co/images/5-star-rating.svg'/>
            </div>
            </div>
            <p className='testimonial1-right-card-text'>My favorite things about Gladefinance have to be the fact that there are no pesky hidden charges, it takes about 10 minutes to get a business account, and the customer service is lightning fast! You don’t know how much you need Gladefinance until you use the services.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards1













  // <div className="testimonial-card-block">
    //     <div className="testimonial-card">
    //         <div className="testimonial-card-content ">
    //             <div className='details'>
    //               <img className='source-image'  src={imagescr}/>
    //                 <div className='personal-details'>
    //                   <h6 className='name'>{name}</h6>
    //                   <p className='job'>{job}</p>
    //                   <img className='rating-image' src={rating}/>
    //                 </div>
    //             </div>
    //             <p className='testimony-details'>{testimony}</p>
    //         </div>
    //     </div>
    // </div>