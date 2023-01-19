import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {getPhotoSmall} from "../../redux/profile-selectors";

class HeaderContainer extends React.Component{
    render(){
        return <Header {...this.props} authUser={this.props.authUser} logout={this.props.logout} photoSmall={this.props.photoSmall}/>
    }
}
const mapStateToProps = (state) =>({
    authUser: state.auth.authUser,
    photoSmall: getPhotoSmall(state)

})

export default connect(mapStateToProps, {logout})(HeaderContainer);