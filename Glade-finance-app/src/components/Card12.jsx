import React from 'react'
import './Card12.css'

const Card12 = () => {
  return (
    <div className='card12-container'>
    <div className="card12-image"> 
      <img className="card12-image" src='https://gladefinance.co/images/budget-limit.svg' alt='budget limit' />
    </div>
    <div className="card12-text">
        <h2 className="card12-title">
           Spend within your limits.
        </h2>
        <p className="card12-description">
            Make informed financial decisions with budgets, spend limits, and analytics.
        </p>
    </div>
</div>
  )
}

export default Card12
