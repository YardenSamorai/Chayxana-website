import React from 'react'
import "./OurStory.css";

const OurStory = () => {

    const texts = {
        title: "הסיפור שלנו",
        subtitle: "מתחיל",
        desc: " מסעדת צייחנה היא מסעדה אותנטית כשרה מהמטבח הבוכרי קווקזי. אצלנו תוכלו להנות מאוכל אותנטי משובח ואיכותי, מתכונים שעוברים במשך דורות. בימי חמישי ושישי תוכלו לרכוש אוכל מוכן (קייטרינג). אנחנו מארחים אירועים פרטיים כגון ימי הולדת,בר מצווה ובריתות באירועים עד 80 איש."
    }

    return (
        <div className="ourstory-container">
            <div className="ourstory-card">
                <div className="ourstory-text" dir="rtl">
                    <h1>{texts.title}</h1>
                    <h3>{texts.subtitle}</h3>
                    <p>{texts.desc}</p>
                </div>
                <div className='ourstory-images'>
                    <img className="img-ourstory" alt="#" src={require('../../assets/ourstory-img.jpg')}></img>
                    <img className="img-ourstory" alt="#" src={require('../../assets/ourstory-img2.jpg')}></img>
                    <img className="img-ourstory" alt="#" src={require('../../assets/ourstory3.jpg')}></img>
                </div>
            </div>
        </div>
    )
}

export default OurStory