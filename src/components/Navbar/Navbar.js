import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import './Navbar.css'
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo">
                <Logo className="logo-component" />
            </div>
            <div className="actions-wrapper">
                <LinkButton name={"יצירת קשר"} to={"#"} />
                <span></span>
                <LinkButton name={"הזמנות"} to={"#"} />
                <span></span>
                <LinkButton name={"עלינו"} to={"#"} />
                <span></span>
                <LinkButton name={"תפריט"} to={"#"} />
                <span></span>
                <LinkButton name={"בית"} to={"#"} />
            </div>
        </nav>
    )
}

export default Navbar