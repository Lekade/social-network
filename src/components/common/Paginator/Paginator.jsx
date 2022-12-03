import React, {useState} from "react"
import style from "./Paginator.module.css";

const Paginator = ({currentPage, changePageNumber, totalItomsCount, pageSize, portionSize="10" }) => {

    let pageCount = Math.ceil(totalItomsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={style.pagination}>

        {portionNumber > 1 && <button className={style.buttonPortion} onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages
            .filter( p => p >= leftPortionPageNumber &&  p <= rightPortionPageNumber)
            .map( (p) => {
                return <span className={currentPage === p && style.paginationActive} key={p} onClick={() => changePageNumber(p)}>{p}</span>
            })}
        {portionCount > portionNumber && <button className={style.buttonPortion} onClick={ () => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
}

export default Paginator;

