import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Friends from "./Friends/Friends";
import React from "react";
import { connect } from "react-redux";


const Navigation = (props) => {
    let dark = props.dark ? s.dark : ""
    return (
        <div className={s.nav}>
        <nav>
        <div className={s.item + " " + dark}><NavLink to="/profile" className={({isActive}) => isActive ? s.activeLink : ""}>Профиль</NavLink></div>
        <div className={s.item + " " + dark}><NavLink to="/news" className={({isActive}) => isActive ? s.activeLink : ""}>Новости</NavLink></div>
        <div className={s.item + " " + dark}><NavLink to="/music" className={({isActive}) => isActive ? s.activeLink : ""}>Музыка</NavLink></div>
        <div className={s.item + " " + dark}><NavLink to="/users" className={({isActive}) => isActive ? s.activeLink : ""}>Друзья</NavLink></div>
        <div className={s.item + " " + dark}><NavLink to="/games" className={({isActive}) => isActive ? s.activeLink : ""}>Игры</NavLink></div>
        <div className={s.item + " " + dark}><NavLink to="/settings" className={({isActive}) => isActive ? s.activeLink : ""}>Настройки</NavLink></div>
        </nav>
        <Friends friendsData={props.state.Friends}/>
        </div>
        
    );
}
const mapStateToProps = (state) =>({
    state: state.Navigation,
    dark: state.Settings.dark
})
export default connect(mapStateToProps,{})(Navigation);