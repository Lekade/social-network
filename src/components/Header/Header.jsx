import React from 'react';
import s from './Header.module.css'

const Header = (props) =>{
	return(
		<header className={s.header}>
        <a className={s.logo} href="#s">
          <img src="https://st2.depositphotos.com/6541572/12168/v/950/depositphotos_121681162-stock-illustration-yoga-pose-icon-in-simple.jpg" alt="logo"/>
        </a>
      </header>
	)
}

export default Header;