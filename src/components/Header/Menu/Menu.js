import React from 'react';
import './Menu.css'
import avatarIcon from '../../../assets/Icons/avatar-icon.png'

const menu = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };
    return (
        <div className="Menu">
         
            <img src={avatarIcon} alt="avatar" onClick={props.avatarClicked}/>
            
            {/* will change later */}
            <a href="/">Home</a>
            <a href="/#About">About us</a>
            
            <a href="/#Contact">Contact</a>
 
            <div className="tooltip"
            style={{
                transform: props.show ? 'translateY(0)' :
                'translateY(-100vh)',
                opacity:props.show ? '1' : '0'
            }}>
                <form onSubmit={handleSubmit}>
                    <input type="email"          placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit"
                 onClick={props.clicked}
               >Login</button>
                </form>
            </div>
        </div>
    
    )
}

export default menu