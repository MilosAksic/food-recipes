import React , { Component }from 'react';
import './App.css';

import Homepage from './components/Header/HomePage'
import Footer from './components/Footer/Footer'
import UpperHeader from './components/Header/UpperHeader/UpperHeader'

class App extends Component {
  render(){
    return (
      <div className="App">
        <UpperHeader/>
        <Homepage />          
        <Footer />
      </div>
    );
  }
  
}

export default App;
