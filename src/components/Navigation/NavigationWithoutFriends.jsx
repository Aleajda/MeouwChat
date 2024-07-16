import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Friends from "./Friends/Friends";
import React from "react";
import { connect } from "react-redux";


const Navigation = (props) => {
    let dark = props.dark ? s.dark : ""
    return (
        <div style={props.dark ? {backgroundColor: '#191919'}:{backgroundColor: 'white'}} onClick={props.toggleNav} className={s.navWithoutFriends}>
        <nav>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/profile" className={({isActive}) => isActive ? s.activeLink : "" + " " + props.dark ? s.dark : ""}>Профиль</NavLink></div>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/news" className={({isActive}) => isActive ? s.activeLink : ""}>Новости</NavLink></div>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/music" className={({isActive}) => isActive ? s.activeLink : ""}>Музыка</NavLink></div>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/users" className={({isActive}) => isActive ? s.activeLink : ""}>Друзья</NavLink></div>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/games" className={({isActive}) => isActive ? s.activeLink : ""}>Игры</NavLink></div>
        <div className={s.item + " " + dark}><NavLink onClick={props.toggleNav} to="/settings" className={({isActive}) => isActive ? s.activeLink : ""}>Настройки</NavLink></div>
        </nav>
        </div>
        
    );
}
const mapStateToProps = (state) =>({
    state: state.Navigation,
    dark: state.Settings.dark
})
export default connect(mapStateToProps,{})(Navigation);