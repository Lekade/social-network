import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    followSuccess, getUsersTK, setExpectationFollowed, unFollow,
    unfollowSuccess
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getExpectationFollowedUsersId,
    getIsFetching,
    getPageSize,
    gettoTalUserscount,
    getUsers
} from "../../redux/users-selectors";



class UsersContainer extends React.Component{


    componentDidMount() {
        this.props.getUsersTK(this.props.currentPage, this.props.pageSize)
    }

    changePageNumber = (pageNumber) => {
        this.props.getUsersTK(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
         <Preloader isFetching={this.props.isFetching}/>

        <Users
            totalUserscount={this.props.totalUserscount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changePageNumber={this.changePageNumber}
            users={this.props.users}
            unfollowSuccess={this.props.unfollowSuccess}
            followSuccess={this.props.followSuccess}
            setExpectationFollowed={this.props.setExpectationFollowed}
            expectationFollowedUsersId={this.props.expectationFollowedUsersId}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
        </>

    }
}

let mapStateToProps = (state) => ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserscount:gettoTalUserscount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        expectationFollowedUsersId:getExpectationFollowedUsersId(state)

})


export default connect(mapStateToProps, {
    followSuccess,  unfollowSuccess, setExpectationFollowed, getUsersTK, follow, unFollow
})(UsersContainer);

