import React , { Component }from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom'


import axios from 'axios'

import headerImg from '../../../assets/Images/HeaderImg.png'
import Category from './Category'

class Welcome extends Component {

  state = {
    categories: [],
    
  }
  componentDidMount(){
   axios.get('/categories.php').then (response => {
      console.log(response.data.categories)
      this.setState({
        
        categories: response.data.categories
      })
    })
}


    render(){
      const categories = this.state.categories.map(
        category => {
          return <Link to="/categories" className='Category'>
            <Category
            
           categoryName = {category.strCategory} 
           key={category.strCategory}
           imgLink={category.strCategoryThumb}/>
          </Link>
           
        }
      )
      return (
        <div className="Welcome">
             <div className="up">
               <div className="left">
                  <h3>Food recipes</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   
                  <button>Categories</button>
               </div>

               <div className="right">
                  <img src = {headerImg} alt="Header"/>
               </div>
             </div>

             <div className='down'>
                  {categories}
             </div>
        </div>
      );
    }
    
  }

  export default Welcome;

