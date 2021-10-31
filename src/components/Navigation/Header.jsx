import React from "react";
import logo from '../../source/images/logo.png';
import menu from '../../source/images/vector.png';
import './../../styles/Header.css';



const Header = (props) => {
    return(
        <header className="header__container">
            <div className="header__logo logo">
                <a href={'#'}><img src={logo} alt="logo" /></a>
            </div>
            <div className="header__menu menu">
                <button><img src={menu} alt="menu" /></button>
            </div>
        </header>
    );
}


export default Header; 