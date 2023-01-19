import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import notPhoto from "../../assecs/images/user.png";

const User = ({user, expectationFollowedUsersId, unFollow, follow}) => {

    const createBtnFollowed = (followed, text) => {
       return <button className={style.btnElement} disabled={expectationFollowedUsersId.some(usersId => usersId == user.id)} onClick={() => {
            followed(user.id)
        }}>{text}</button>}

return(
    <div className={style.userItom}>
        <div className={style.userInfo}>
            <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : notPhoto} alt=""/>
            </NavLink>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
        <div className={style.followedItom}>
            {user.followed
                ? createBtnFollowed(unFollow, "Unfollow")
                : createBtnFollowed(follow, "Follow")}
        </div>

    </div>
)
}
export default User