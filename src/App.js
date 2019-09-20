import React , { Component }from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Homepage from './components/Header/HomePage'
import Footer from './components/Footer/Footer'
import UpperHeader from './components/Header/UpperHeader/UpperHeader'
import SingleCategory from './components/SingleCategory/SingleCategory'
import SingleMeal from './components/SingleMeal/SingleMeal'


class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <UpperHeader/>

        <Route path="/" exact component={Homepage} />
        <Route path="/categories" component={SingleCategory} />
        <Route path="/meal" component={SingleMeal} />
                 
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
