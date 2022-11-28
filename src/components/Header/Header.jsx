import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{


	return(
		<header className={style.header}>
        <a className={style.logo} href="#s">
          <img src="https://st2.depositphotos.com/6541572/12168/v/950/depositphotos_121681162-stock-illustration-yoga-pose-icon-in-simple.jpg" alt="logo"/>
        </a>
        <div className={style.login}>
            { props.authUser
                ? <div><span>{props.login}</span> <button onClick={props.logout}>Logout</button> </div>
                : <NavLink className={style.loginLink} to="/login">Login</NavLink> }
        </div>
      </header>
	)
}

export default Header;