import React , { Component } from 'react';
import './SingleMeal.css';

import axios from 'axios'
import ChosenMeal from './ChosenMeal/ChosenMeal'

class SingleMeal extends Component {
    state = {
        meals: []
      }

    componentDidMount(){
        axios.get('/lookup.php?i=52772').then (response => {
           console.log(response.data.meals)
           this.setState({
              meals: response.data.meals
           })
         })
     }
    render(){
        let MealArray = this.state.meals
        const mealDetail = MealArray.map(

            meal=>{
                return <ChosenMeal
                mealName={meal.strMeal}
                link={meal.strMealThumb}
                category = {meal.strCategory}
                country ={meal.strArea}
                video = {meal.strYoutube}
                description ={meal.strInstructions}
                hashtags = {meal.strTags}
                key = {meal.strMeal}
                        />
            }
        )
        return(
            <div className="SingleMeal">
                {mealDetail}
            </div>
        )
    }
}
export default SingleMeal