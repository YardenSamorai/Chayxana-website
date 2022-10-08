import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer" dir="rtl">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>מיקום</h4>
            <ul className="list-unstyled">
              <li dir="ltr">+972 3 773 9919</li>
              <li>פתח תקווה, ישראל</li>
              <li>בר כוכבא 32</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>שעות פעילות</h4>
            <ul className="list-unstyled">
              <li>ראשון - חמישי : 09:00 - 23:00</li>
              <li>יום שישי : 09:00 - 16:00</li>
              <li>יום שבת : 19:00 - 23:00</li>
            </ul>
          </div>
          <div className="logo-footer">
            <Logo />
          </div>
        </div>
  
        <div className="row">
          <p className="col-sm" dir='ltr'>
            {/* &copy; {new Date().getFullYear()} Chayxana Resturant || All right reserved || Term of Service || Privacy */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer