import React from 'react'
import './Intro.css';
import play_icon from '../assets/play-circle.svg'
import blue1_image from '../assets/blue1.svg'
import blue2_image from '../assets/blue2.svg'
import new_laptop from '../assets/new-laptop-view.png'
// import glade_card  from '../assets/glade-card.svg'
import phone_image from '../assets/PHONE.png'

const Intro = () => {
  return (
    <div className='introContainer'>
      <div className='introContainerText'>
        <h1 className='intro-text'>
        Simplified payments 
        and invoice 
        management in one place.
        </h1>
        <p className='intro-subtext'>Join thousands of businesses of all sizes using Gladefinance’s accounts, payments, and invoicing solutions to manage and scale their businesses.</p>
        <div className='intro-button-general' >
          <button className='get-started'>Get Started</button>
          <button className='play-video'><img src={play_icon}></img>Play Video</button>
        </div>
      </div>
      <div className='image-container'>
        <img src={blue1_image} className='blue1-image'></img>
        <img src={blue2_image} className='blue2-image'></img>
        <img src={new_laptop} className='laptop-image'></img>
          <div className='animation'>
            <img src='https://gladefinance.co/images/cards-new.svg' className='master-card'></img>
            <img src={phone_image} className='phone-image'></img>
         </div>
      </div>
    </div>
  )

}


export default Intro
