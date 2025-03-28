import React from 'react'
import './Card3.css'

const Card3 = () => {
  return (
    <div className='card3-container'>
    {/* <div className="card-content"> */}
       <div className="card3-image"> 
          <img className="card3-image" src='https://gladefinance.co/images/loan_officers.svg' alt='team-photo' />
        </div>
        <div className="card3-text">
            <h2 className="card3-title">Affordable and accessible capital for businesses of all sizes.</h2>
            <p className="card3-description">Get the capital you need to grow your business with our collateral-free loans. We offer competitive interest rates and no guarantors required. You can get approved within 24 hours, so you can start growing your business sooner.
            </p>
          <span className="card3-getStarted">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png "/> </span>
        </div>
    {/* </div> */}
  </div>
  )
}

export default Card3
