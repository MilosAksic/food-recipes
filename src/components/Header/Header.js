import React from 'react';
import './Header.css'

import UpperHeader from './UpperHeader/UpperHeader'

const header = (props) => {
    return (
        <div className="Header">

            <UpperHeader/>
            <p>I am a Milos and i am  years old</p>
            
        </div>
    
    )
}

export default header