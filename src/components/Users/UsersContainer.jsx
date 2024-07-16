import React, { useEffect } from "react";
import Users from "./Users";
import { follow, setUsers, unfollow, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading, setFollowingInProgress, getUsers, setQuery } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Preloader from "../additional/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";




const UsersContainer = (props) =>{
    
    useEffect(() =>{
        props.getUsers(props.currentPage, props.pageSize, props.query);
        return () =>{
            props.clearUsers();
        }
    }, [props.query]);

    let onPageChanged = (PageNumber) => {
        props.setCurrentPage(PageNumber);
        props.clearUsers();
        props.getUsers(PageNumber, props.pageSize, props.query);
    }

    return (
        <>
            <Users {...props} onPageChanged={onPageChanged}/>
            {props.isLoading ? <Preloader/> : null}
        </>
    ); 
}


let mapStateToProps = (state) =>{
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isLoading: state.Users.isLoading,
        isFollowing: state.Users.isFollowing,
        query: state.Users.query,
        dark: state.Settings.dark
    }
}



export default compose(connect(mapStateToProps, {unfollow, follow, setUsers, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading, setFollowingInProgress, getUsers, setQuery} ),  withAuthRedirect)(UsersContainer);
