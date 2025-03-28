import React from 'react'
import './Card6.css'

const Card6 = () => {
  return (
    <div className='card6-container'>
      {/* <div className="card-content"> */}
      <div className="card6-text">
        <h2 className="card6-title">Payroll that's easy to use</h2>
        <p className="card6-description">The simplest way to pay your people. Give your employees early access to their earned salary with Gladefinance Payroll Access.</p>
        <span className="card6-getStarted">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png"/> </span>
      </div>
      <div className="card6-image"> 
        <img className="card6-image" src='https://gladefinance.co/images/payroll_team.svg' alt='exchanges' />
      </div>
        
      {/* </div> */}
    </div>
  )
}

export default Card6
