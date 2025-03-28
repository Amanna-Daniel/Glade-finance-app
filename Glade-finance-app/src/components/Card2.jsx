import React from 'react'
import './Card2.css'

const Card2 = () => {
  return (
    <div className='card2-container'>
       <div className="card2-image"> 
          <img className="card-image" src='https://gladefinance.co/images/send.svg' alt='exchanges' />
        </div>
        <div className="card2-text">
            <h2 className="card2-title">Transfers and FX</h2>
            <p className="card2-description">Make domestic and international payments to your suppliers and vendors with low fees and
               great exchange rates.
            </p>
          <span className="card2-get-started">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png "/> </span>
        </div>
  </div>
  )
}

export default Card2
