import React from 'react';
import './SingleMeal.css';

const SingleMeal =(props) => {

        return(
            <div className="SingleMeal">
                {props.MealDetails}
            </div>
        )
    }

export default SingleMeal