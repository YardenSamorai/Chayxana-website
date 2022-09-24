import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import './Navbar.css'
import LegenderyLogo from '../LegenderyLogo/LegenderyLogo'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo">
                <LegenderyLogo className="logo-component" />
            </div>
            <div className="actions-wrapper">
                <LinkButton name={"Home"} to={"#"} />
                <span></span>
                <LinkButton name={"Menus"} to={"#"} />
                <span></span>
                <LinkButton name={"Reservations"} to={"#"} />
                <span></span>
                <LinkButton name={"About"} to={"#"} />
                <span></span>
                <LinkButton name={"Contact"} to={"#"} />
            </div>
        </nav>
    )
}

export default Navbar