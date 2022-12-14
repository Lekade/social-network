import React, {Suspense} from 'react';
import Navbar from './components/NavBar/Nav';
import './App.css';
import {Routes, Route, useLocation, useNavigate, useParams} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component{

    componentDidMount() {
       this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader / >
        }
        return <div className='app_wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <main className='main'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path='/dialogs/*' element={
                                <DialogsContainer/> }/>

                                <Route path='/profile/:userId/*'  element={
                                    <ProfileContainer/> }/>
                                <Route path='/profile/'  element={
                                    <ProfileContainer/> }/>

                                <Route path='/users/*' element={<UsersContainer />}/>

                                <Route path='/news/*' element={<News />}/>

                                <Route path='/music/*' element={<Music />}/>

                                <Route path='/settings/*' element={<Settings/>}/>

                                <Route path='/login/*' element={<LoginContainer/>}/>
                                <Route path='/'  element={
                                <ProfileContainer/> }/>

                                <Route path='*' element={<div>404 NOT FOUND</div>}/>

                            </Routes>
                         </Suspense>
                    </main>
            </div>
}}

    let withRouter = (Component) => {
        let ComponentWithRouterProps = (props) =>{
            let location = useLocation();
            let navigate = useNavigate();
            let params = useParams();
            return <Component {...props}  router={{ location, navigate, params }}/>
        }

        return ComponentWithRouterProps;
    }

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App)
