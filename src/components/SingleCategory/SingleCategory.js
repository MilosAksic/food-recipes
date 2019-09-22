import React from 'react';
import './SingleCategory.css';


const SingleCategory  =(props)=> {
              
        return(
            <div className="SingleCategory">

                    <h3>KATEGORIJA </h3>
            <div className="FeaturedMeal">
                    <h3>Our recomendation</h3>
                    <img src={props.feateredURL}alt="slika"/>
                    <p>{props.meals.strMeal} </p>
            </div>
                <h3>{props.categoryName}</h3>
                {/* <FeaturedMeal meals={props.meals}/> */}
                <hr/>
                <div className="allMeals">
                       {props.meals} 
                </div>
                
            
                
            </div>
        )

    }
        
    

export default SingleCategory