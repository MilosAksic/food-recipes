import React from 'react'
import './SearchPage.css'

const searchPage = (props) => {

    return(
        <div className="searchPage">
            <h3>Search Results</h3>
            <p>Our recommendation</p>
             <div className="Recomendation">
                 {props.SearchedArray[0]}
                
             </div>
             <div className='Dropdown'>Dropwon</div>
             <hr/>
             <div className="searchedResults">
                 {props.SearchedArray}
             </div>
             
        </div>
    );

}

export default searchPage