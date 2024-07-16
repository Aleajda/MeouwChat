// import Profile from "./Profile";
// import React from "react";
// import axios from "axios";
// import { connect } from "react-redux";
// import { setProfile, getStatus, updateStatus } from "../../redux/profileReducer";
// import { withRouter } from "../../withRouter";
// import { Navigate } from "react-router-dom";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
// import { compose } from "redux";

// class ProfileContainer extends React.Component{
//     componentDidMount() {
//         this.loadProfileData();
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.params.userId !== prevProps.params.userId) {
//             this.loadProfileData();
//         }
//     }

//     loadProfileData = () => {
//         let userId = this.props.params.userId ?? this.props.myId;
//         if (!userId){this.props.history.push("/login")}
//         this.props.setProfile(userId);
//         this.props.getStatus(userId);
//     }
//     render(){
//         return (
//             <Profile {...this.props} updateStatus = {this.props.updateStatus}/>
//         );
//     }
// };


// let mapStateToProps = (state) => ({
//     profile: state.ProfilePage.profile,
//     status: state.ProfilePage.status,
//     myId: state.Auth.id,
//     isAuth: state.Auth.isAuth
// })

// export default compose(connect(mapStateToProps, { setProfile, getStatus, updateStatus }), withAuthRedirect, withRouter)(ProfileContainer); 

