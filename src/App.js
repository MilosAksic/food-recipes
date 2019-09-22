import React , { Component }from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Homepage from './components/Header/HomePage'
import Footer from './components/Footer/Footer'
import UpperHeader from './components/Header/UpperHeader/UpperHeader'
import SingleCategory from './components/SingleCategory/SingleCategory'
import SingleMeal from './components/SingleMeal/SingleMeal'
import Category from './components/Main/Welcome/Category'
import SingleCategoryMeal from './components/SingleCategory/SingleCategoryMeal/SingeCategoryMeal'
import ChosenMeal from './components/SingleMeal/ChosenMeal/ChosenMeal'

import axios from 'axios'
import { Link } from 'react-router-dom'


class App extends Component {

  state = {
    categories: [],
    mealsbyCategory: [],
    choosenMealDetails:[],
    choosenMeal:"",
    choosedCategory:''
  }

  componentDidMount(){
   axios.get('/categories.php').then (response => {
      console.log(response.data.categories)
      this.setState({
        ...this.state,
        categories: response.data.categories
      })
    })
}

clickHandler(CategoryName){
  this.setState (
    {
      ...this.state,
      choosedCategory:CategoryName
    }
    

  )
  console.log('clicked')
  axios.get('/filter.php?c='+CategoryName).then (response => {
    console.log(response.data.meals)
    this.setState({
      ...this.state,
      mealsbyCategory: response.data.meals
    })
  })
}

clickHandlerMeal(MealId){
  this.setState (
    {
      ...this.state,
      choosenMeal:MealId
    }
    

  )
  console.log('clicked')
  axios.get('/lookup.php?i='+MealId).then (response => {
    console.log(response.data.meals)
    this.setState({
      ...this.state,
      choosenMealDetails: response.data.meals
    })
  })
}



  render(){
    const categories = this.state.categories.map(
      category => {
        return <Link to="/categories" className='Category' 
                                      onClick={() => this.clickHandler(category.strCategory)} >
          <Category        
         categoryName = {category.strCategory} 
         key={category.strCategory}
         imgLink={category.strCategoryThumb}/>
        </Link>
         
      }
    )

    const meals = this.state.mealsbyCategory.map(
                      meal => {
                          return <Link to="/meal" className="SingleCategoryMeal" 
                                                 onClick={() => this.clickHandlerMeal(meal.idMeal)}
                                                  key={meal.idMeal}
                                                  ><SingleCategoryMeal          
                          mealName = {meal.strMeal}
                          link = {meal.strMealThumb}
                          key={meal.idMeal}/>
                          </Link>
                      }
                  )

   const mealDetails = this.state.choosenMealDetails.map(
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
    return (
      <div className="App">
        <BrowserRouter>
        <UpperHeader/>

        <Route path="/" exact render={()=>{
          return <Homepage categoriesList = {categories}/>
        }} />

        <Route path="/categories" render={()=>{
          return <SingleCategory 
                      meals= {meals}
                     
                      categoryName = {this.state.choosedCategory} />
        }} />

        <Route path="/meal" render={()=>{
          return <SingleMeal MealDetails = {mealDetails}/>
        }}  />
                 
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
