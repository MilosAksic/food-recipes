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

import axios from 'axios'
import { Link } from 'react-router-dom'


class App extends Component {

  state = {
    categories: [],
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
}


  render(){
    const categories = this.state.categories.map(
      category => {
        return <Link to="/categories" className='Category'
                                      >
          <Category
         onClick={() => this.clickHandler(category.strCategory)}
         categoryName = {category.strCategory} 
         key={category.strCategory}
         imgLink={category.strCategoryThumb}/>
        </Link>
         
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
          return <SingleCategory choosenCat = {this.state.choosedCategory}/>
        }} />

        <Route path="/meal" component={SingleMeal} />
                 
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
