import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs';
import Navbar from '../components/Navbar/Navbar'
import OurStory from '../components/OurStory/OurStory';
import Menus from '../components/Menus/Menus';
import Reservation from '../components/Reservations/Reservation';
import Footer from '../components/Footer/Footer';
import MouseWheel from '../components/MouseWheel/MouseWheel';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <section id="בית" className="logo-section">
                <Navbar />
                <div className="logo-title">
                    <div className="logo-text">
                        <h1>מסעדת צ'ייחנה</h1>
                        <h4>Chayxana Resturant</h4>
                    </div>
                    <img src={require('../assets/cutlery-logo.png')} alt="big-bg" className="cutlery-logo" />
                    <MouseWheel />
                </div>
                <img src={require('../assets/big-bg2.jpg')} alt="big-bg" className="big-bg" />
            </section>

            <section id="עלינו" className="our-story-container">
                <OurStory />
            </section>

            <section id="יצירת קשר" className="contact-us">
                <ContactUs />
            </section>

            {/* <section id="תפריט" className='manu-container'>
                <Menus />
            </section> */}

            {/* <section id="Reservations" className="reservation" >
                <Reservation />
            </section> */}

            {/* <section className="footer">
                <Footer />
            </section> */}
        </div>
    )
}

export default Home