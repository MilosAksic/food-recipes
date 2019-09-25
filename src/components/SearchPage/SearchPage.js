import React from 'react'
import './SearchPage.css'

const searchPage = (props) => {

    return(
        <div className="searchPage">
            <div className="titles">
            <h3>Search Results</h3>
            <p>Our recommendation</p>
            </div>
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