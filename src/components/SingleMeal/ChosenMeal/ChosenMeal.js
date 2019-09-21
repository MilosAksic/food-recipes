import React from 'react';
import './ChosenMeal.css'


const chosenmeal = (props) => {
    return (
        <div className="ChosenMeal">
            <div className="ChosenUpperr">
                <div className="UpperrLeft">
                        <h3>
                        {props.mealName}
                        </h3>
                        <img  src ={props.link}alt="meal"/>
                </div>

                <div className="UpperrRight">
                    <p> 
                        <span className="bold">Hashtags :</span> : {props.hashtags}</p>
                    <p> 
                      <span className="bold">Category:</span>
                      {props.category}</p>
                    <p>
                         <span className="bold">Country:</span> {props.country}</p>
                    <p>
                         <span className="bold">Video:</span>
                          {props.video}</p>
                    <p className="instruction">{props.description}</p>
                </div>

            </div>

            <div className='ChosenDown'>
                <div className="ingridients"></div>
                <div className="measure"></div>
            </div>
            
        </div>
    
    )
}

export default chosenmeal