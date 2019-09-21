import React from 'react';
import './ChosenMeal.css'


const chosenmeal = (props) => {
    return (
        <div className="ChosenMeal">
            <div className="ChosenUpper">
            <div className="ChosenUpper">
                
                </div>
            </div>
            <h3>
                Meal Name {props.mealName}
            </h3>
            <img alt="meal"/>
        </div>
    
    )
}

export default chosenmeal