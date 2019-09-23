import React from 'react'
import './SearchPage.css'

const searchPage = (props) => {

    return(
        <div className="searchPage">
            <h3>Search Results</h3>
            <p>Our recommendation</p>
             <div className="Recomendation">
                 {props.SearchedArray[0]}
                {/* <img src={props.imgLink} alt="slika"/>
                <p>{props.mealName}</p>

                <p>Category: 
                    <span className="boldItem">{props.category}</span></p>
                <p>Country: 
                    <span className="boldItem">{props.coutry}</span></p> */}
             </div>
             <div className='Dropdown'>Dropwon</div>
             <hr/>
             {props.SearchArray}
        </div>
    );

}

export default searchPage