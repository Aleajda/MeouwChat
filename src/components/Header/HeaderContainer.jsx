import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUser, logoutUser } from "../../redux/authReducer";

const HeaderContainer = (props) =>{
    return (
            <Header {...props}/>
        )
}




let mapStateToProps = (state) =>{
    return {
      isAuth: state.Auth.isAuth,
      login: state.Auth.login,
      dark: state.Settings.dark
    }
}



export default connect(mapStateToProps, {setAuthUser, logoutUser})(HeaderContainer);