import React from 'react';
import s from './Profileinfo.module.css'


const Profileinfo = (props) =>{
    return(
        <div className={s.profileinfo}>
            <img className={s.profile_image} src="https://w-dog.ru/wallpapers/0/15/435643165576258/most-reka-zolotye-vorota-san-francisko.jpg" alt="image"/>
            <div className={s.content}>
                <img className={s.photo} src="https://static.tildacdn.com/tild3333-6532-4030-a539-383562626433/W-71.jpg" alt="photo"/>
            </div>

        </div>
    )
}

export default Profileinfo;