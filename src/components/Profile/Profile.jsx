import { SyncOutlined } from "@ant-design/icons";
import Preloader from "../additional/Preloader/Preloader";
import PostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";


const Profile = (props) => {
    if (!props.profile){
        return (
            <div style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}><SyncOutlined style={{fontSize: '20vw'}} spin={true}/></div>
        ); 
    }
    return (
        <div>
            <ProfileInfo dark={props.dark} profile={props.profile} status={props.status} updateStatus = {props.updateStatus} isOwner = {props.isOwner} updatePhoto={props.updatePhoto} saveProfile={props.saveProfile}/>
            <PostsContainer profile={props.profile}/>
        </div>
    );
};
export default Profile;
