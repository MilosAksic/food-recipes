import React , { Component }from 'react';
import './components/Header/SearchBar/SearchBar.css'
import './components/Header/UpperHeader/UpperHeader.css'
import { Route } from 'react-router-dom';

import Homepage from './components/Header/HomePage'
import SearchBar from './components/Header/SearchBar/SearchBar'
import MyMeals from './components/MyMeals/MyMeals'
import SingleSearchItem  from './components/SearchPage/SingleSearchItem/SingleSearchItem'
import Menu from './components/Header/Menu/Menu'
import SingleCategory from './components/SingleCategory/SingleCategory'
import SingleMeal from './components/SingleMeal/SingleMeal'
import Category from './components/Main/Welcome/Category'
import SingleCategoryMeal from './components/SingleCategory/SingleCategoryMeal/SingeCategoryMeal'
import ChosenMeal from './components/SingleMeal/ChosenMeal/ChosenMeal';
import SearchPage from './components/SearchPage/SearchPage'

import axios from 'axios'
import { Link } from 'react-router-dom'


class Site extends Component {

  state = {
    categories: [],
    mealsbyCategory: [],
    choosenMealDetails:[],
    SearchedArray:[],
    randomMeal1:[],
    randomMeal2:[],
    randomMeal3:[],
    choosenMeal:"",
    choosedCategory:'',
    value: '',
    showTooltip : false,
    isAtHomePage: true,
    isLogged:false,
    typedUsername :'',
    typedPassword:"",
    username : 'admin@admin.com',
    password: 'admin'
    
  }

  componentDidMount(){
   axios.get('/categories.php').then (response => {
      console.log(response.data.categories)
      this.setState({
        ...this.state,
        categories: response.data.categories
      })
    })

    axios.get('/random.php').then (response => {        
      this.setState({
        ...this.state,
        randomMeal1: response.data.meals
      })
    })

    axios.get('/random.php').then (response => {        
       this.setState({
         ...this.state,
         randomMeal2: response.data.meals
       })
     })

     axios.get('/random.php').then (response => {        
       this.setState({
         ...this.state,
         randomMeal3: response.data.meals
       })
     })
  
}

searchresChangedHandler = (event) => {
    this.setState(
      {
        ...this.state,
        value : event.target.value
      }
    )
    
  }

  // ChangedMailHandler

  ChangedMailHandler = (event) => {
    this.setState(
      {
        ...this.state,
        typedUsername : event.target.value
      }
    )
    
  }
  // ChangedPasswordHandler

  ChangedPasswordHandler = (event) => {
    this.setState(
      {
        ...this.state,
        typedPassword : event.target.value
      }
    )
    
  }
  logOutHandler =()=>{
    this.setState (
      {
        ...this.state,
        isLogged:false
      }
    )
  }
  avatarClcikedHandler = () =>{
    this.setState (
      {
        ...this.state,
        showTooltip:!this.state.showTooltip
      }
    )
  }
//    for search
  clickedHandler = () => {
    if (this.state.value==="") return
    axios.get (`/search.php?s=${this.state.value}`).then(
        response =>{
            
            console.log(response.data.meals);
            this.setState (
                {
                  ...this.state,
                  SearchedArray:response.data.meals,
                  isAtHomePage : false
                }
              )
        }
    )
  }

  searchRouteHandler=()=>{
    if(this.state.value==='') return
  }

  myMealsClicked =()=>{
    this.setState (
      {
        ...this.state,
        isAtHomePage : false
      }
    )
  }

  logginHandler =() => {
    if(this.state.typedUsername==="admin@admin.com" &&
    this.state.typedPassword==="admin" ){
      this.setState (
        {
          ...this.state,         
          isLogged : true,
          showTooltip : false

        }
      )
    }
  }

clickHandler=(CategoryName)=>{
  this.setState (
    {
      ...this.state,
      choosedCategory:CategoryName,
      isAtHomePage : false
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

clickHandlerMeal=(MealId)=>{

  this.setState (
    {
      ...this.state,
      choosenMeal:MealId,
      isAtHomePage : false
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
                                      onClick={() => this.clickHandler(category.strCategory)}
                                      key={category.strCategory} >
          <Category        
         categoryName = {category.strCategory} 
         key={category.strCategory}
         imgLink={category.strCategoryThumb}/>
        </Link>
         
      }
    )
    const SearchedArray = this.state.SearchedArray.map(meal => {
         return <Link to="/meal"        className="SingleCategoryMeal" 
                onClick={() => this.clickHandlerMeal(meal.idMeal)}
                key={meal.idMeal}
                >
                    <SingleSearchItem         
        mealName = {meal.strMeal}
        imgLink = {meal.strMealThumb}
        key={meal.idMeal}
        country={meal.strArea}
        category={meal.strCategory}/>

        </Link>

    })
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
   const randomMeal1 = this.state.randomMeal1.map(
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
const randomMeal2 = this.state.randomMeal2.map(
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

const randomMeal3 = this.state.randomMeal3.map(
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
   let FinishedMeal = this.state.choosenMealDetails                   
   const mealDetails = FinishedMeal.map(
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
      ingredients = {[meal.strIngredient1,meal.strIngredient2,meal.strIngredient3,meal.strIngredient4,meal.strIngredient5,meal.strIngredient6,meal.strIngredient7,meal.strIngredient8,meal.strIngredient9,meal.strIngredient10]}
      measurments = {[meal.strMeasure1,meal.strMeasure2,meal.strMeasure3,meal.strMeasure4,meal.strMeasure5,meal.strMeasure6,meal.strMeasure7,meal.strMeasure8,meal.strMeasure9,meal.strMeasure10]}
              />
  }
                )
    return (
      <div className="Site">
        
        <div className="UpperHeader">
    
                <SearchBar 
                changed= {this.searchresChangedHandler}searchRouteHandler={this.searchRouteHandler}
                value = {this.state.value}
                clicked = {this.clickedHandler}/>
                <Menu username ={this.state.username}
                      password = {this.state.username}
                      show={this.state.showTooltip}
                      avatarClicked={this.avatarClcikedHandler}
                      atHome={this.state.isAtHomePage}
                      isLogged={this.state.isLogged}
                      clicked={this.logginHandler}
                      valueMail={this.state.typedUsername}
                      valuePw={this.state.typedPassword}
                      changedMail= {this.ChangedMailHandler}
                      changedPw= {
                        this.ChangedPasswordHandler
                      }
                      logOut={this.logOutHandler}
                      myMealsClick = {this.myMealsClicked}
                      />
                
        </div>

        <Route path="/" exact render={()=>{
          return <Homepage categoriesList = {categories}/>
        }} />

        <Route path="/categories" render={()=>{
          return <SingleCategory 
                      meals= {meals}
                     
                      categoryName = {this.state.choosedCategory} />
        }} />

        <Route path="/meal" render={()=>{
          return <SingleMeal 
                      MealDetails = {mealDetails}
                      meals= {meals}/>
        }}  />

        <Route path="/search" render={()=>{
          return <SearchPage  SearchedArray={SearchedArray}
                     />
        }}  />

<Route path="/myMeals" render={()=>{
          return <MyMeals 
          randomMeal1={randomMeal1}
          randomMeal2={randomMeal2}
          randomMeal3={randomMeal3}/>
        }}  />
                 
        
      </div>
    );
  }
  
}

export default Site;