import React from 'react'
import './CardC.css'

const CardC = () => {
  return (
    <div className='CardC-container'>
      <div className='left-cardC-container'>                        
        <div className='left-cardC-content'>
            <h3 className='cardC-text'>
               Accept payments quickly and easily with our POS terminals.
            </h3>
            <p className='cardc-description'>
              Our Android 2-in-1 POS terminal is the perfect way to simplify your in-store payment collection and instantly receive payment into your account.
            </p>
             <span className="cardC-get-Started">
                Get Started 
                <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png" alt="arrow"/>
            </span> 
        </div>
      </div>
      <div className='right-cardC-container'>
        <img src='https://gladefinance.co/images/posScreen.svg' alt="Glade POS"/>
      </div>
    </div>
  )
}

export default CardC
