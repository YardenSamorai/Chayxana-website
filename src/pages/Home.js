import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs';
import Navbar from '../components/Navbar/Navbar'
import OurStory from '../components/OurStory/OurStory';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <section className="logo-section">
                <Navbar />
                <div className="logo-title">
                    <div className="logo-text">
                        <h1>Chayxana Resturant</h1>
                        <h4>In the heart of Petah Tikva</h4>
                    </div>
                    <img src={require('../assets/cutlery-logo.png')} alt="big-bg" className="cutlery-logo" />
                    <div className="mouse-icon">
                        <div className="mouse-wheel"></div>
                    </div>
                </div>
                <img src={require('../assets/big-bg2.jpg')} alt="big-bg" className="big-bg" />
            </section>

            <section className="our-story-container">
                <OurStory />
            </section>

            <section className="contact-us">
                <ContactUs />
            </section>

        </div>
    )
}

export default Home