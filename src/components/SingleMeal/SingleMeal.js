import React from 'react';
import './SingleMeal.css';

const SingleMeal =(props) => {

        return(
            <div className="SingleMeal">
                {props.mealDetails}
            </div>
        )
    }

export default SingleMeal