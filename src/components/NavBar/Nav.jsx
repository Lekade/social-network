import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import profileImg from "./../../assecs/images/profile.png"
import usersImg from "./../../assecs/images/users.png"
import messagesImg from "./../../assecs/images/messages.png"

const Navbar = () =>{
	return(
      <nav className={style.nav}>
        <ul>
          <li><NavLink to="/profile" ><img src={profileImg}/> Profile</NavLink></li>
          <li><NavLink to="/dialogs" ><img src={messagesImg}/> Messages</NavLink></li>
          <li><NavLink to="/users"><img src={usersImg}/> Find users</NavLink></li>
        </ul>
      </nav>
	)
}

export default Navbar;