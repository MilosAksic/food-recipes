import React , { Component } from 'react';
import './SingleCategory.css';
import Welcome from '../Main/Welcome/Welcome'


import { Link } from 'react-router-dom'
import axios from 'axios'

import SingleCategoryMeal from './SingleCategoryMeal/SingeCategoryMeal'
import FeaturedMeal from './FeaturedMeal/FeaturedMeal' 



class SingleCategory extends Component {
    state = {
        meals: []
      }
    componentDidMount(){

        // /filter.php?c=Seafood
        axios.get('/filter.php?c=Beef').then (response => {
            console.log(response.data.meals)
            console.log(Welcome.state)
            this.setState({
                meals: response.data.meals
            })
          })

     }
    render() {
        const meals = this.state.meals.map (
            meal => {
                return <Link to="/meal" className="SingleCategoryMeal"><SingleCategoryMeal          
                mealName = {meal.strMeal}
                link = {meal.strMealThumb}
                key={meal.idMeal}/>
                </Link>
            }
        )
        return(
            <div className="SingleCategory">
                <h2>KATEGORIJA </h2>
                <h3>Naziv kategorije </h3>
                <FeaturedMeal/>
                <hr/>
                <div className="allMeals">
                      {meals}
                </div>
                
            
                
            </div>
        )

    }
        
    }

export default SingleCategory