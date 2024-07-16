import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
import React from "react";


const Friends = (props) => {

    let arrFriends = props.friendsData.map((friend, index) => <Friend key={index} name={friend.name} imgSrc={friend.imgSrc}/>);
    return (
        <div>
            <div className={s.text}>
                Мои друзья
            </div>
            <div className={s.friends}>
                {arrFriends}
            </div>
            
        </div>
    );
}
export default Friends;