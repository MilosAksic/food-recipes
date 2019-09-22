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
    
    changedNameHandler(event){
        this.setState(
            {
                ...this.state,
                firstName : event.target.value
            }
          )     
    }
    changedLastNameHandler(event){
        this.setState(
            {
                ...this.state,
                lastName : event.target.value
            }
          ) 
    }

    changedEmailHandler(event){
        this.setState(
            {
                ...this.state,
                Email : event.target.value
            }
          )   
    }

    changedMsgHandler(event){
        this.setState(
            {
                ...this.state,
                Message : event.target.value
            }
          )    
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
                onChange={this.changedNameHandler}></input>
                <input type="text" placeholder="Last Name"
                onChange={this.changedLastNameHandler}></input>
                <input type="email" placeholder="Email"
                onChange={this.changedEmailHandler}></input>
                <textarea placeholder="Message"
                onChange={this.changedMsgHandler}/>
                <button type="submit"
                >Send</button>
            </form>
        </div>    
        )
    }
       
    
    

    
}

export default contact