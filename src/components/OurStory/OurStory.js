import React from 'react'
import "./OurStory.css";

const OurStory = () => {
    return (
        <div className="ourstory-container">
                <img className="img-ourstory" src={require('../../assets/ourstory-img.jpg')}></img>
                <img className="img-ourstory" src={require('../../assets/ourstory-img2.jpg')}></img>
                <img className="img-ourstory" src={require('../../assets/ourstory3.jpg')}></img>
            <div className="text-ourstory">
                <h1>Our Story</h1>
                <h3>Begins</h3>
                <p>מסעדת צייחנה היא מסעדה אותנטית 
                    מהמטבח הבוכרי קווקזי אצלנו תוכלו להנות מאוכל 
                    משובח ואיכותי בנוסף אנו עושים גם אירועים 
                    פרטים עד 70 איש וקיטרינג ביתי בימי שישי.
                </p>
            </div>
        </div>
    )
}

export default OurStory