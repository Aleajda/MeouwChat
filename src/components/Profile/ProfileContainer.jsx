import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, updateStatus, updatePhoto, saveProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../hoc/withRouter";

const ProfileContainer = (props) =>{
    useEffect(() =>{
        loadProfileData();
    }, [props.params.userId]);

    let loadProfileData = () => {
        let userId = props.params.userId ?? props.myId;
        if (!userId){props.history.push("/login")}
        props.setProfile(userId);
        props.getStatus(userId);
    }
    return (
        <Profile {...props} updateStatus = {props.updateStatus} isOwner = {!props.params.userId} updatePhoto={props.updatePhoto}/>
    );
};


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    myId: state.Auth.id,
    isAuth: state.Auth.isAuth,
    dark: state.Settings.dark

})

export default compose(connect(mapStateToProps, { setProfile, getStatus, updateStatus, updatePhoto, saveProfile }), withAuthRedirect, withRouter)(ProfileContainer); 
