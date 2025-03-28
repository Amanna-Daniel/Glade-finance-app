import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='top-footer'>
           <div className='locations'>
            <div className='location1'>
              <h3 className='head-name'>United Kingdom</h3>
              <p className='road'>307 Euston Road London,</p>
              <p className='road'>NW1 3AD, United Kingdom.</p>
            </div>
            <div className='location2'>
              <h3 className='head-name'>United States</h3>
              <p className='road'>Suite 206 Middletown,</p>
              <p className='road'>19709 New Castle, Delaware, US.</p>
            </div>
            <div className='location3'>
              <h3 className='head-name'>Nigeria</h3>
              <p className='road'>9b Ike Asogwa,</p>
              <p className='road'>Maryland, Lagos, Nigeria.</p>
            </div>
          </div>
          <div className='feature-list'> 
            <h3 className='head-name'>
                Features
            </h3>
            <p className='features'>Company Creation</p>
            <p className='features'>Accounts</p>
            <p className='features'>Payments</p>
            <p className='features'>Cards</p>
            <p className='features'>Expense Management</p>
            <p className='features'>Cashflow</p>
            <p className='features'>Invoicing</p>
            <p className='features'>Checkout</p>
          </div>
          <div className='company'>
            <h3 className='head-name'>
                Company
            </h3>
            <p className='features'><a href='https://gladefinance.co/terms/'>Terms</a></p>
            <p className='features'>Privacy Policy</p>
            <p className='features'>Brand</p>
            <p className='features'>Partner with us</p>
          </div>
          <div className='resources1'>
            <h3 className='head-name'>
                Resources
            </h3>
            <p className='features1'>FAQs</p>
            <p className='features1'>Blog</p>
          </div>
          <div className='developers'>
            <h3 className='head-name'>
                Developers
            </h3>
            <p className='features'>API Documentation</p>
            <p className='features'>API Reference</p>
            <p className='features'>Slack Community</p>
          </div>
          <div className='contact'>
            <h3 className='head-name'>
                Contact
            </h3>
            <p className='c-features'>support@gladefinance.co</p>
            <p className='features'>support@glade.ng</p>
            <p className='features'>hello@glade.ng</p>
            <div className='socials'>
                <img src='https://gladefinance.co/images/linkedin-icon.svg' />
                <img src='https://gladefinance.co/images/facebook-icon.svg' />
                <img src='https://gladefinance.co/images/instagram-icon.svg'/>
                <img src='https://gladefinance.co/images/twitter-icon.svg' />
            </div>
          </div>
        </div>
        <div className='bottom-footer'>
            <p className='bottom-text'>
              Gladefinance, a product of Glade Inc, a financial technology company offers banking services provided by our reliable partner banks, which are licensed financial institutions. 
              Cards are issued by our partner banks pursuant to license from Visa and MasterCard and may be used everywhere Visa and MasterCard debit cards are accepted.
            </p>
            <p className='copyright'>
              © Gladefinance 2025. All Rights Reserved
            </p>
        </div>
    </footer>
    
  )
}

export default Footer
