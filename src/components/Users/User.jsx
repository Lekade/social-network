import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import usersPhoto from "../../assecs/images/user.png";

const User = ({user, expectationFollowedUsersId, unFollow, follow}) => {

    const createBtnFollowed = (followed, text) => {
       return <button disabled={expectationFollowedUsersId.some(usersId => usersId == user.id)} onClick={() => {
            followed(user.id)
        }}>{text}</button>}

return(
    <div className={style.userItom}>
        <div className={style.userPhoto}>
            <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : usersPhoto} alt=""/>
            </NavLink>

            <div>
                {user.followed
                    ? createBtnFollowed(unFollow, "Unfollow")
                    : createBtnFollowed(follow, "Follow")}
            </div>

        </div>
        <div  className={style.userInfo}>
            <div className={style.userIngoInner}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={style.userIngoInner}>
                <div>{'u.location.country'}</div>
                <div>{'u.location.sity'}</div>
            </div>

        </div>
    </div>
)
}
export default User