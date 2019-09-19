import React , { Component }from 'react';
import './Welcome.css';

import headerImg from '../../../assets/Images/HeaderImg.png'
class Welcome extends Component {
    render(){
      return (
        <div className="Welcome">
             <div className="up">
               <div className="left">
                  <h2>Food recipes</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button>Categories</button>
               </div>

               <div className="right">
                  <img src = {headerImg} alt="Header"/>
               </div>
             </div>
        </div>
      );
    }
    
  }

  export default Welcome;

