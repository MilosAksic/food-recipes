import React from 'react';
import './SingleCategory.css';

import { Link } from 'react-router-dom'
import axios from 'axios'

import SingleCategoryMeal from './SingleCategoryMeal/SingeCategoryMeal'
import FeaturedMeal from './FeaturedMeal/FeaturedMeal' 

const FetchedCategory = 
         axios.get('/filter.php?c=Beef').then (response => response.json())
         .then( data => {
             return data.data.meals
         })
console.log('fetched',FetchedCategory)
//   const meals = FetchedCategory.map(
//                 meal => {
//                     return <Link to="/meal" className="SingleCategoryMeal" key={meal.idMeal}><SingleCategoryMeal          
//                     mealName = {meal.strMeal}
//                     link = {meal.strMealThumb}
//                     key={meal.idMeal}/>
//                     </Link>
//                 }
//             )

const SingleCategory  =(props)=> {
    // const FetchedCategory = 
    //      axios.get('/filter.php?c=Beef').then (response => {
    //         console.log(response.data.meals)
    //          return response.data.meals
    //            } )
    // componentDidMount(){

    //     // /filter.php?c=Seafood
    //     axios.get('/filter.php?c=Beef').then (response => {
    //         console.log(response.data.meals)

    //         this.setState({
    //             meals: response.data.meals
    //         })
    //       })

    //  }
       
        
        return(
            <div className="SingleCategory">
                <h2>KATEGORIJA </h2>
                <h3>Naziv kategorije </h3>
                <FeaturedMeal/>
                <hr/>
                <div className="allMeals">
                      {/* {meals} */}
                </div>
                
            
                
            </div>
        )

    }
        
    

export default SingleCategory