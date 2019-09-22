import React , { Component } from 'react';
import './Contact.css'

class contact extends Component {

    state= {
        firstName:'',
        lastName:'',
        Email:'',
        Message:'',
        isModalOpened:false
    }
    handleSubmit = event => {
       
        event.preventDefault();
    };
    
    changedNameHandler(){
              
    }
    changedLastNameHandler(){
              
    }

    changedEmailHandler(){
              
    }
    render(){
        const handleSubmit = event => {
       
            event.preventDefault();
          };
          
        return(
            <div className="Contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name"
                onChange={this.changedName}></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email"></input>
                <textarea placeholder="Message"/>
                <button type="submit"
                >Send</button>
            </form>
        </div>    
        )
    }
       
    
    

    
}

export default contact