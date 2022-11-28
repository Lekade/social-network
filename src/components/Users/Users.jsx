import React from "react";
import style from "./Users.module.css"
import usersPhoto from "../../assecs/images/user.png"
import {NavLink} from "react-router-dom";


const Users = (props) => {

        let pageCount = Math.ceil(props.totalUserscount / props.pageSize);

         let pageUsers = [];

         for (let i = 1; i <= pageCount; i++){
             pageUsers.push(i);
         }

        return <div className={style.usersContainer}>

               <div className={style.pagination}>
                   {pageUsers.map( p => {
                       return <span className={props.currentPage === p && style.paginationActive} onClick={() => props.changePageNumber(p)}>{p}</span>
                   })}
               </div>

              {
                 props.users.map( u =>
                 <div key={u.id} className={style.userItom}>
                                    <div className={style.userPhoto}>
                                        <NavLink to={`/profile/` + u.id}>
                                            <img src={u.photos.small !== null ? u.photos.small : usersPhoto} alt=""/>
                                        </NavLink>

                                        <div>
                                            {u.followed
                                                ? <button disabled={props.expectationFollowedUsersId.some(usersId => usersId == u.id)}  onClick={() => {
                                                    props.unFollow(u.id)
                                                }}>Unfollow</button>

                                                : <button disabled={props.expectationFollowedUsersId.some(userId => userId == u.id)} onClick={() => {
                                                    props.follow(u.id)
                                                }}>Follow</button>}
                                        </div>

                                    </div>
                                    <div  className={style.userInfo}>
                                        <div className={style.userIngoInner}>
                                            <div>{u.name}</div>
                                            <div>{u.status}</div>
                                        </div>
                                        <div className={style.userIngoInner}>
                                            <div>{'u.location.country'}</div>
                                            <div>{'u.location.sity'}</div>
                                        </div>

                                    </div>
                                </div>)
              }</div>

    }

export default Users;