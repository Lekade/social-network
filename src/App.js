import React, {Suspense} from 'react';
import Navbar from './components/NavBar/Nav';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import styleContainer from "./StyleContainer.module.css"
import {getIntialized} from "./redux/app-selectors";

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
                    <div className={styleContainer.container}>
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

                                    <Route path='/login/*' element={<LoginContainer/>}/>
                                    <Route path='/'  element={
                                    <ProfileContainer/> }/>

                                    <Route path='*' element={<div>404 NOT FOUND</div>}/>

                                </Routes>
                             </Suspense>
                        </main>
                    </div>
            </div>
}}

let mapStateToProps = (state) => ({
    initialized: getIntialized(state)
})

export default compose(
    connect(mapStateToProps, {initializeApp}))(App)
