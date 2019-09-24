import React from 'react';
import './Menu.css'
import avatarIcon from '../../../assets/Icons/avatar-icon.png'

const menu = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };
    return (
        <div className="Menu">
         
            <img src={avatarIcon} alt="avatar" onClick={props.avatarClicked}
            style={{
                display: props.isLogged ? 'none' :
                'block'
            }}/>
            
            {/* will change later */}
            <a href="/" style={{
                display: props.atHome ? 'none' :
                'block'
            }}>Home</a>
            <a href="/#About">About us</a>
            
            <a href="/#Contact">Contact</a>
            <a href="/myMeals"style={{
                display: props.isLogged ? 'block' :
                'none'
            }}>My Meals</a>
            <p 
            onClick={props.logOut}
            style={{
                display: props.isLogged ? 'block' :
                'none'
            }}>Log out</p>
 
            <div className="tooltip"
            style={{
                transform: props.show ? 'translateY(0)' :
                'translateY(-100vh)',
                opacity:props.show ? '1' : '0'
            }}>
                <form onSubmit={handleSubmit}>
                    <input type="email"          placeholder="Email"
                    onChange={props.changedMail} 
                    value={props.valueMail} />
                    <input type="password" placeholder="Password"
                    onChange={props.changedPw} 
                    value={props.valuePw} />
                    <button type="submit"
                 onClick={props.clicked}
               >Login</button>
                </form>
            </div>
        </div>
    
    )
}

export default menu