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
      height: '100px',
      width: '120px',
      marginLeft: '25px',
      border: '5px solid lightgray',
      marginTop: '.5%'
    };
    const header = {
      position: 'fixed'
    };
    const bannerStyle = {
      color: 'white',
      backgroundColor: 'red',
      textAlign: 'center',
      padding: '1.5%',
      fontWeight: 'bold',
      fontSize: '22px'
    };
    return (
      <div>
        {/* <div className="appHeader"> */}
        {/* <header className="App-header">
          <SearchBar />
          <div className="header" />
        </header> */}
        <div className="secondHeader" style={header}>
          <img alt="icon" src={icons} style={iconsLogo} />
          <div className="list">
            <Link to="/" className="span">
              <span>Home</span>
            </Link>
            <Link to="/HowItWorks" className="span">
              <span>How It Works</span>
            </Link>
            <Link to="/Meals" className="span">
              <span>Menus</span>
            </Link>
            <Link to="/About" className="span">
              <span>About Us</span>
            </Link>
            <Link to="/Contact" className="span">
              <span>Contact</span>
            </Link>
          </div>
          {/* <SearchBar /> */}
          <Cart />
        </div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        {/* </div> */}
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
