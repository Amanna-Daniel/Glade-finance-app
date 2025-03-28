import React from 'react'
import './Card7.css'
import checkmark from '../assets/checkmark-outline.svg'
import checkout1 from '../assets/card7_images/checkout_1.png'
import checkout2 from '../assets/card7_images/checkout_2.png'
import checkout3 from '../assets/card7_images/checkout_3.png'
import checkout4 from '../assets/card7_images/checkout_4.png'
import checkout5 from '../assets/card7_images/checkout_5.png'
import checkout6 from '../assets/card7_images/checkout_6.png'

const Card7 = () => {
  return (
    <div className='card7-container'>
    {/* <div className="card-content"> */}
       <div className="card7-image"> 
          <img className='card7-image' src={checkout1} alt='checkout' />
          <img className='card7-image' src={checkout2} alt='checkout' />
          <img className='card7-image' src={checkout3} alt='checkout' />
          <img className='card7-image' src={checkout4} alt='checkout' />
          <img className='card7-image5' src={checkout5} alt='checkout' />     
          <img className='card7-image' src={checkout6} alt='checkout' />
        </div>
        <div className="card7-text">
            <h2 className="card7-title">
              Gladefinance Checkout
            </h2>
            <p className="card7-description">
              With Gladefinance Checkout, you can accept payments from clients all over the world, using a variety of payment methods. 
              You can also create beautiful, 
              branded payment requests, and share them with your clients with just a few clicks.
            </p>
            <div className='payments-container'>
                <div className='payments'>
                   <p className='pay-texts'><img src={checkmark} />Card</p>
                   <p className='pay-texts'> <img src={checkmark}/>USSD</p>
                   <p className='pay-texts'> <img src={checkmark} />QR Pay</p>
                   <p className='pay-texts'> <img src={checkmark} />Bank Transfer</p>
                   <p className='pay-texts'> <img src={checkmark} />Mobile Money</p>
                </div>
            </div>
            
          <span className="card7-getStarted">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png "/> </span>
        </div>
    {/* </div> */}
  </div>
  )
}

export default Card7
