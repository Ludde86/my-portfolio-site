import React from 'react';
import "./userCard.css"
import ResumeImg from "../../../../img/avatar-small-resume.png"

const user = 
    {id: 1, firstname: "Ludvig", lastname: "Bjorn", online: false}


export default function UserCard({status, onClick}) {
    return(
        <div className='user-card'>
        <div className='user-card_username'>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p className={status ? "status-online" : "status-offline"}>{status ? "Online" : "Offline"}</p>
        </div>
        <img src={ResumeImg} alt='profile-img' width={80}/>
        <button className='user-card_button' onClick={onClick}>{status ? "Logga ut" : "Logga in"}</button>
        
        </div>
    );
}