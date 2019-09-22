import React from 'react';
import './Menu.css'
import avatarIcon from '../../../assets/Icons/avatar-icon.png'

const menu = (props) => {
    return (
        <div className="Menu">
         
            <img src={avatarIcon} alt="avatar"/>
            
            {/* will change later */}
            <a href="/">Home</a>
            <a href="/#About">About us</a>
            
            <a href="/#Contact">Contact</a>
        </div>
    
    )
}

export default menu