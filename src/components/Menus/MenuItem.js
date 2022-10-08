import React from 'react'
import './MenuItem.css';

const MenuItem = ({ name, describe, price, img, id }) => {
    return (
        <div className="menus">
            {/* <img src="https://via.placeholder.com/150C" alt=""> */}
            <div class="menu-content">
                <div className="menu-content-price">
                    <h4>{name}</h4>
                    <div className="dot"></div>
                    <h4>{price} ₪</h4>
                </div>
                <p className="menu-content-desc">{describe}</p>
            </div>
        </div>
    )
}

export default MenuItem