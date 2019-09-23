import React , { Component }from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Site from './Site'

import Footer from './components/Footer/Footer'

class App extends Component {

  render(){
  
    return (
      <div className="App">
        <BrowserRouter>
        <Site/>                
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
