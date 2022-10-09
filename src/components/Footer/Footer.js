import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {

  const texts = {
    location: {
      title: "מיקום",
      city: "פתח תקווה, ישראל",
      address: "בר כוכבא 32"
    },
    hours: {
      title: "שעות פעילות",
      sunToThur: "ראשון - חמישי : 09:00 - 23:00",
      friday: "יום שישי : 09:00 - 16:00",
      saturday: "יום שבת : 19:00 - 23:00"
    },
    contactUs: "צור קשר"
  }
  return (
    <div className="main-footer" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="box-1">
            <div className="col">
              <h4>{texts.location.title}</h4>
              <ul className="list-unstyled">
                <li>{texts.location.city}</li>
                <li>{texts.location.address}</li>
              </ul>
            </div>
            <div className="col">
              <h4>{texts.hours.title}</h4>
              <ul className="list-unstyled">
                <li>{texts.hours.sunToThur}</li>
                <li>{texts.hours.friday}</li>
                <li>{texts.hours.saturday}</li>
              </ul>
            </div>
            <div className="col">
              <h4>{texts.contactUs}</h4>
              <ul className="list-unstyled">
                <li>{texts.hours.sunToThur}</li>
                <li>{texts.hours.friday}</li>
                <li>{texts.hours.saturday}</li>
              </ul>
            </div>
          </div>
          <div className="box-2 col footer-logo">
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