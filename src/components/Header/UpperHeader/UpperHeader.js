import React from 'react';
import './UpperHeader.css'


import Menu from '../Menu/Menu'
import SearchBar from '../SearchBar/SearchBar'

const upperheader = (props) => {
    return (
        <div className="UpperHeader">

            <SearchBar/>
            <Menu/>
            
        </div>
    
    )
}

export default upperheader