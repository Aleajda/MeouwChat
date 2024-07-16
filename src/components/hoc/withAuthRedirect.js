import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForAuthRedirect = (state) =>{
    return {
        isAuth: state.Auth.isAuth,
        initialized: state.App.initialized
    }
}

export const withAuthRedirect = (Component) => {
    const Wrapper = (props) => {
        if (!props.isAuth) return (<Navigate to={"/login"}/>);
        return (<Component {...props} />);
    };
    let ConnectedWrapper = connect(mapStateToPropsForAuthRedirect)(Wrapper);
    return ConnectedWrapper;
};