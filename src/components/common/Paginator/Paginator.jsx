import React from "react"
import style from "./Paginator.module.css";

const Paginator = ({currentPage, changePageNumber, totalUserscount, pageSize}) => {

    let pageCount = Math.ceil(totalUserscount / pageSize);

    let pageUsers = [];

    for (let i = 1; i <= pageCount; i++){
        pageUsers.push(i);
    }

    return <div className={style.pagination}>
            {pageUsers.map( p => {
                return <span className={currentPage === p && style.paginationActive} onClick={() => changePageNumber(p)}>{p}</span>
            })}
        </div>
}

export default Paginator;