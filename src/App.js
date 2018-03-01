import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import router from './router';
// import HeaderBar from './components/Header/HeaderBar';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
// import Cart from './components/Cart/Cart';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <hr />
          <div className="header">
            <Login />
            {/* <Cart /> */}
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">SPMeals</h1> */}
        </header>{' '}
        <div className="secondHeader">
          <div className="icon">SPMeals</div>
          <div className="list">
            <Link to="/Shop" className="span">
              <span>Shop</span>
            </Link>
            <Link to="/HowItWorks" className="span">
              <span>How It Works</span>
            </Link>
            <Link to="/Contact" className="span">
              <span>Contact</span>
            </Link>
            <Link to="/About" className="span">
              <span>About Us</span>
            </Link>
          </div>
        </div>
        {router}
      </div>
    );
  }
}

export default App;
