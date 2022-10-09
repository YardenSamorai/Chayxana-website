import React from 'react'
import Logo from '../Logo/Logo'
import MapBox from '../MapBox/MapBox'
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
          <div className="box-2 col embd-map">
              {/* <MapBox /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597.5310203190166!2d34.88519564855042!3d32.09234248328812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d366cbd9ffa4d%3A0x999553a1b6554d41!2sBar%20Kochva%20St%2032%2C%20Petah%20Tikva!5e0!3m2!1sen!2sil!4v1665327261053!5m2!1sen!2sil" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          <div className="box-3 col footer-logo">
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