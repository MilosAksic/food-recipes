import React from 'react';
import './Main.css'

import About from './AboutUs/About'
import Contact from './Contact/Contact'
import Welcome from './Welcome/Welcome'

const main = (props) => {
    return (
        <div className="Main">
            <Welcome/>
            <About/>
            <Contact/>
        </div>
    
    )
}

export default main