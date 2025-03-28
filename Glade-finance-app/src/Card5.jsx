import React from 'react'
import './Card5.css'

const Card5 = () => {
  return (
    <div className='card5-container'>
    {/* <div className="card-content"> */}
       <div className="card5-image"> 
          <img className="card5-image" src='https://gladefinance.co/images/invoice.svg' alt='cash-flow' />
        </div>
        <div className="card5-text">
            <h2 className="card5-title">
              Improve your cash flow with smarter invoicing</h2>
            <p className="card5-description">Our invoicing features makes it easy to create professional, tax-compliant invoices. With our
                pre-integrated payment options, your clients can immediately pay online or via bank transfer in a few clicks.
            </p>
          <span className="card5-getStarted">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png "/> </span>
        </div>
    {/* </div> */}
  </div>
  )
}

export default Card5
