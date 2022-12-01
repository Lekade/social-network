import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let profileId = this.props.router.params.userId
        if(!profileId){
            profileId = this.props.id
        }
        this.props.getUserProfile(profileId)
        this.props.getStatus(profileId)
    }

    render (){
        return <Profile {...this.props} profileData={this.props.profileData}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
        profileData: state.profilePage.profileData,
        status:state.profilePage.status,
        id: state.auth.id
})

let withRouter = (Component) => {
    let ComponentWithRouterProps = (props) =>{
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props}  router={{ location, navigate, params }}/>
    }
    return ComponentWithRouterProps;
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter)(ProfileContainer)


