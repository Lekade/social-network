import React, {useState, useRef, useEffect} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../assecs/images/logo.png"
import notPhoto from "../../assecs/images/user.png";
import styleContainer from "../../StyleContainer.module.css"

const Header = ({authUser, photoSmall, logout}) =>{

    const [opened, setOpened] = useState(false);

    const onClose = () => {
        setOpened(false);
    }

	return(
		<header className={style.header}>
            <div className={styleContainer.container}>
                <NavLink className={style.logo} to="/profile"><img src={logo} alt="logo"/><span>Social-Network</span></NavLink>

                <div className={style.login}>
                    { authUser
                        ? <div className={style.list} onClick={() => setOpened((v) => !v)}>
                            <Logout logout={logout} opened={opened} onClose={onClose}/>
                            {photoSmall ? <img src={photoSmall} alt="myPhoto"/> : <img src={notPhoto} alt="notPhoto"/>}
                        </div>
                        : <NavLink className={style.loginLink} to="/login">Login</NavLink> }
                </div>
            </div>
      </header>
	)
}

const Logout = ({ logout, opened, onClose}) => {
    const logoutRef = useRef(null);

    useEffect(() => {
        if(!opened) return;

        const handleClick = e => {
            if(!logoutRef.current) return;
            if(!logoutRef.current.contains(e.target)){
                onClose();
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [opened, onClose])

    if(!opened) return null;

   return <div ref={logoutRef} className={style.listItom}>
            <button  onClick={logout}>LOGOUT</button>
        </div>

}

export default Header;