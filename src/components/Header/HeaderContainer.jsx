import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props} authUser={this.props.authUser} logout={this.props.logout} login={this.props.login}/>
    }
}
const mapStateToProps = (state) =>({
    authUser: state.auth.authUser,
    login:state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);