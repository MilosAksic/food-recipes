import React from 'react';
import './Menu.css'
import avatarIcon from '../../../assets/Icons/avatar-icon.png'

const menu = (props) => {
    return (
        <div className="Menu">
         
            <img src={avatarIcon} alt="avatar"/>
            
            {/* will change later */}
            <a href="www.facebook.com">About us</a>
            
            <a href="www.facebook.com">Contact</a>
        </div>
    
    )
}

export default menu