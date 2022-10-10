import React from 'react'
import Logo from '../Logo/Logo'
import MapBox from '../MapBox/MapBox'
import './Footer.css'

const Footer = () => {

  const handleOnClickFacebook = () => {
    window.open("https://www.facebook.com/Chayxana-%D7%A6%D7%99%D7%99%D7%97%D7%A0%D7%94-111346931694188", '_blank');
  }

  const handleOnClickWhatappMsg = () => {
    const text = "היי%20ברצוני%20לקבל%20פרטים%20נוספים%20על%20מסעדת%20צ'ייחנה"
    window.open(`https://wa.me/+972544818272?text=${text}`, "_blank");
  }
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
                <li>03-7739919</li>
                <li>
                  <img src={require("../../assets/Icons/facebook.png")} onClick={handleOnClickFacebook} />
                  <img src={require("../../assets/Icons/whatsapp.png")} onClick={handleOnClickWhatappMsg} />
                </li>
              </ul>
            </div>
          </div>
          <div className="box-2 col embd-map">
            <h4>דרכי הגעה</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597.5312340653215!2d34.88553272723686!3d32.09230980077325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d366cbd9ffa4d%3A0x999553a1b6554d41!2sBar%20Kochva%20St%2032%2C%20Petah%20Tikva!5e0!3m2!1sen!2sil!4v1665415193374!5m2!1sen!2sil" max-width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row footer-img">
          <div className="col">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer