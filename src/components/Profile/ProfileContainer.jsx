import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfileData, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getId, getProfileData, getstatus} from "../../redux/profile-selectors";

class ProfileContainer extends React.Component{

    userInitialization = () => {
        let profileId = this.props.router.params.userId
        if(!profileId){
            profileId = this.props.id
        }
        this.props.getUserProfile(profileId)
        this.props.getStatus(profileId)
    }

    componentDidMount() {
        this.userInitialization()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId !== prevProps.router.params.userId){
            this.userInitialization()
        }
    }

    render (){
        return <Profile {...this.props} profileData={this.props.profileData}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        idOwner={!this.props.router.params.userId}
                        savePhoto={this.props.savePhoto}
                        saveProfileData={this.props.saveProfileData}
        />
    }
}

let mapStateToProps = (state) => ({
        profileData: getProfileData(state),
        status: getstatus(state),
        id: getId(state)
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData}),
    withAuthRedirect,
    withRouter)(ProfileContainer)


