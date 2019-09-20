import React , { Component }from 'react';
import './UpperHeader.css';
import axios from 'axios';


import Menu from '../Menu/Menu'
import SearchBar from '../SearchBar/SearchBar'

class upperheader extends Component {
    state = {
        value: ''
      }
      searchresChangedHandler = (event) => {
        this.setState(
          {
            value : event.target.value
          }
        )
        
      }
      clickedHandler = () => {
        axios.get (`/search.php?s=${this.state.value}`).then(
            response =>{
                console.log(response.data.meals)
            }
        )
      }

    render(){
        return (
            <div className="UpperHeader">
    
                <SearchBar 
                changed= {this.searchresChangedHandler} 
                value = {this.state.value}
                clicked = {this.clickedHandler}/>
                <Menu/>
                
            </div>
        
        )    
    }
    
}

export default upperheader