import React from 'react'
import './Card4.css'

const Card4 = () => {
  return (
    <div className='card4-container'>
      {/* <div className="card-content"> */}
      <div className="card4-text">
        <h2 className="card-title">Take control of your business expenses.</h2>
        <p className="card4-description">Stay on top of your company expenses with budgets, spend limits, employee cards, and reconciliation.</p>
        <span className="getStarted">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png"/> </span>
      </div>
      <div className="card4-image"> 
        <img className="card-image" src='https://gladefinance.co/images/expense_management-new.svg' alt='exchanges' />
      </div>
        
      {/* </div> */}
    </div>
  )
}

export default Card4
