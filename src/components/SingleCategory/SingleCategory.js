import React from 'react';
import './SingleCategory.css';


const SingleCategory  =(props)=> {
              
        return(
            <div className="SingleCategory">

            
            <div className="FeaturedMeal">
                 <h3>{props.categoryName}</h3>
                    <p className="recomendationText">Our recomendation</p>
                    
                    <div className="recomendation">{props.meals[0]}</div> 
            </div>
                
                
                <hr/>
                <div className="allMeals">
                       {props.meals} 
                </div>
                
            
                
            </div>
        )

    }
        
    

export default SingleCategory