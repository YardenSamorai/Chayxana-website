import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem';
import "./Menus.css";
import firebase from '../../firebase';
import SelectedMenu from './SelectedMenu/SelectedMenu';
import { ListApi } from './SelectedMenu/ApiPath';


const Menus = () => {
    const [menu, setMenu] = useState([]);
    const [currentMenu, setCurrentMenu] = useState("hotmeal");
    const [currentPath, setCurrentPath] = useState(ListApi[currentMenu]);
    const [Page, setPage] = useState("");

    const getData = () => {
        currentPath.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setMenu(items)
        }, err => {
            console.log(`Encountered error: ${err}`);
        })
    }

    useEffect(() => {
        getData();
        setCurrentPath(ListApi[currentMenu])


    }, [currentMenu,currentPath])

    return (

        <div dir="rtl" className="menus-container">
            <div className="Menu-title">
                <h1>התפריט שלנו</h1>
                <h4>{Page}</h4>
            </div>
            <div className="SelectedMenu">
                <SelectedMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} Page={Page} setPage={setPage} />
            </div>

            <div className="menu-item-container">

                {menu && menu.map(object => {
                    return (
                        <div className="menu-item">
                            <MenuItem name={object.name} describe={object.describe} price={object.price} img={object.img} key={object.name + "key"} />
                        </div>
                    )
                })}

            </div>

        </div>
    )

}

export default Menus