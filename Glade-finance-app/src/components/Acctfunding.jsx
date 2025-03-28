import React from 'react'
import './Acctfunding.css'


const Acctfunding = () => {
  return (
    <section className='personal-finance' >
      <div className='finance-content'> 
        <div className='left-content' >
            <div className='text-container'>
                <h1 className='finance-text'>
                    Manage your personal finances
                </h1>
                <p className='finance-description'>
                    Fund your account, transfer funds, get cards to make online payments, 
                    set budgets to control your spending, all from one place.
                </p>
            </div>
            <a>
                <button className='finance-button'>Get Started</button>
            </a>
        </div>
        <div className='right-image' >
            <img src='https://gladefinance.co/images/personal-account-section1.png'  width="609" height="405"/>
        </div>
      </div>
    </section >
  )
}

export default Acctfunding
