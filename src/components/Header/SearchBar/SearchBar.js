import React from 'react';
import './SearchBar.css'

const searchbar = (props) => {
    return (
        <div className="Searchbar">

            <input type="text" placeholder="Search recipes"></input>
            <button>Search</button>
            
        </div>
    
    )
}

export default searchbar