import React from "react";
import style from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, changePageNumber, totalUsersCount, pageSize, ...props}) => {

        return <div className={style.usersContainer}>
            <Paginator currentPage={currentPage} changePageNumber={changePageNumber} totalItomsCount={totalUsersCount} pageSize={pageSize}/>

            { props.users.map( u => <User user={u} key={u.id}
                     expectationFollowedUsersId={props.expectationFollowedUsersId}
                     unFollow={props.unFollow}
                     follow={props.follow}/> )
              }</div>
    }

export default Users;