import React from 'react';
import './SingleCategoryMeal.css'


const singlecategorymeal = (props) => {
    return (
        <div className="SingleCategoryMeal">
            
            <img src={props.link} alt="slika"/>
            <p>Teriyaki chicken {props.mealName}</p>
        </div>
    
    )
}

export default singlecategorymeal