import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Nav';
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (

            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <main className='main'>
                    <Routes>
                        <Route path='/dialogs/*' element={
                            <Dialogs
                                dispatch={props.dispatch}
                                dialogsPage={props.state.dialogsPage} /> }/>
                        <Route path='/profile/*' element={
                                <Profile
                                dispatch={props.dispatch}
                                profilePage={props.state.profilePage} /> }/>
                        <Route path='/news/*' element={<News />}/>
                        <Route path='/music/*' element={<Music />}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
);
}

export default App;
