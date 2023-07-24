import React, {useState} from "react";
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'

const Header = () => {
    const [menuOpened , setMenuOpened] = useState (false)
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right : !menuOpened && "-100%"}
        }
    }
    return (
        <div>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" width={100}/>
                    <OutsideClickHandler 
                        onOutsideClick={() => {
                            setMenuOpened(false)
                        }}
                    >
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Get Started</a>
                        <button className="button">
                           <a href="">Content</a>
                        </button>
                    </div>
                    </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Header