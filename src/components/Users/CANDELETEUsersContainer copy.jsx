import React from "react";
import axios from "axios";
import Users from "./Users";
import { follow, setUsers, unfollow, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading, setFollowingInProgress, getUsers } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Preloader from "../additional/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";




class UsersContainer extends React.Component{

    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    componentWillUnmount(){
        this.props.clearUsers();
    }


    onPageChanged = (PageNumber) => {
        this.props.setCurrentPage(PageNumber);
        this.props.clearUsers();
        this.props.getUsers(PageNumber, this.props.pageSize);
    }


    render() {
        return (
            <>
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
                {this.props.isLoading ? <Preloader/> : null}
            </>
        ); 
    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isLoading: state.Users.isLoading,
        isFollowing: state.Users.isFollowing
    }
}



export default compose(connect(mapStateToProps, {unfollow, follow, setUsers, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading, setFollowingInProgress, getUsers} ),  withAuthRedirect)(UsersContainer);
