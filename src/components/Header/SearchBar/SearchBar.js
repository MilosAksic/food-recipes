import React from 'react';
import './SearchBar.css'

import SearchIcon from '../../../assets/Icons/search.png'

const searchbar = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };
    return (
        <div className="Searchbar">
            <form onSubmit={handleSubmit}>
               <input type="text"
                 placeholder="Search recipes"
                 onChange={props.changed} 
                 value={props.value}>

                </input>
              <button type="submit"
              onClick={props.clicked}
               >
                 <img src={SearchIcon} alt='search'/>
               </button>
            </form>
            
            
        </div>
    
    )
}

export default searchbar