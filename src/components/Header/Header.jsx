import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import React, { useState } from "react";
import NavigationWithoutFriends from "../Navigation/NavigationWithoutFriends";
import koteyka from "../../images/koteyka.gif";
import menuIcon from "../../images/iconmenu2.svg"
import darkKoteyka from "../../images/darkKoteyka.png"
import { MenuOutlined } from "@ant-design/icons";

const Header = (props) => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header style={props.dark ? {backgroundColor: '#191919', color: 'white'} : {backgroundColor: 'white', color: 'black'}} className={s.header}>
        <img className={s.icon} style={{marginLeft: '10px'}} src={darkKoteyka}></img>
        <div className={s.name}>MEOUWCHAT</div>
        {props.isAuth 
        ?
        <div className={s.loginWrapper}>
            <div className={s.loginContainer}>
                <div className={s.login}>{props.login}</div>
                <button 
                    style={props.dark ? {background: 'rgb(47, 248, 255)', background: 'radial-gradient(circle, rgb(47, 248, 255) 0%, white 100%)'} : null} 
                    className={s.submitBtn} onClick={props.logoutUser}>
                    <span>logout</span>
                </button>
            </div>
            <div style={{cursor: 'pointer'}} onClick={toggleNav} className={s.navImg}><MenuOutlined style={{fontSize: '30px', paddingTop: '5px'}}/></div>
            {showNav && <div className={s.fullScreenNav}><NavigationWithoutFriends toggleNav={toggleNav}/></div>}
        </div>
        :
        <div className={s.loginLink}><NavLink to="/login">login</NavLink></div>}
        </header> 
    );
}
export default Header;