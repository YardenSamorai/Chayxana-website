import React, { useState, useEffect } from 'react'
import './SelectedMenu.css';

const SelectedMenu = ({ currentMenu, setCurrentMenu, Page, setPage }) => {

    const onClickChange = (e) => {
        if (currentMenu !== e.target.alt) {
            setCurrentMenu(e.target.alt);

        }
        setPage(e.target.id);
        console.log(Page);
    }

    const isActive = (menuString) => {
        return Boolean(currentMenu === menuString);
    }



    return (
        <div className="icons-container">
            <div className="icon-list">
                <div className={"icon-item " + (isActive('shipodim') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="shipodim" id="שיפודים" src={require('../../../assets/Icons/skewer.png')}></img>
                </div>
                <div className={"icon-item " + (isActive('salads') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="salads" id="סלטים" src={require('../../../assets/Icons/salad (1).png')}></img>
                </div>
                <div className={"icon-item " + (isActive('hotmeal') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="hotmeal" id="מסורתי" src={require('../../../assets/Icons/meal.png')}></img>
                </div>
                <div className={"icon-item " + (isActive('soup') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="soup" id="מרקים" src={require('../../../assets/Icons/soup.png')}></img>
                </div>
                <div className={"icon-item " + (isActive('desert') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="desert" id="קינוחים" src={require('../../../assets/Icons/ice-cream.png')}></img>
                </div>
                <div className={"icon-item " + (isActive('drinks') ? 'active' : '')}>
                    <img onClick={onClickChange} alt="drinks" id="שתייה" src={require('../../../assets/Icons/sparkling-water.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default SelectedMenu