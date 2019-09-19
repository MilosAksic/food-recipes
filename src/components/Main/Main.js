import React from 'react';
import './Main.css'

import About from './AboutUs/About'
import Contact from './Contact/Contact'

const main = (props) => {
    return (
        <div className="Main">
            <About/>
            <Contact/>
        </div>
    
    )
}

export default main