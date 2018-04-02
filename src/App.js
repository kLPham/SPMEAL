import React, { Component } from 'react';
import './App.css';
import router from './router';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import icons from './icons.jpg';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    const iconsLogo = {
      height: '97px',
      width: '230px',
      marginLeft: '25px',
      border: '5px solid lightgray'
    };
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <div className="header">
            {/* <Login /> <br /> */}
            <Cart />
          </div>
        </header>{' '}
        <div className="secondHeader">
          <img alt="icon" src={icons} style={iconsLogo} />
          <div className="list">
            <Link to="/" className="span">
              <span>Home</span>
            </Link>
            <Link to="/Meals" className="span">
              <span>Meals</span>
            </Link>
            <Link to="/HowItWorks" className="span">
              <span>How It Works</span>
            </Link>
            <Link to="/About" className="span">
              <span>About Us</span>
            </Link>
            <Link to="/Contact" className="span">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
