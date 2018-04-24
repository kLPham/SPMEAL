import React, { Component } from 'react';
import './App.css';
import router from './router';
import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
// import SearchBar from './components/SearchBar/SearchBar';
// import Login from './components/Login/Login';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import Cart from './components/Cart/Cart';
import icons from './icons.jpg';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND ACTION BELOW:
  }

  //CREATE HANDLE CHANGE METHOD BELOW:

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
    const homeIconStyle = {
      marginTop: '-35%',
      height: '37px',
      width: '32px'
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
              <span>
                <FaHome style={homeIconStyle} />
              </span>
            </Link>
            <Link to="/HowItWorks" className="span">
              <span>How It Works</span>
            </Link>
            <Link to="/Meals" className="span">
              <span>
                <FaCutlery />Menus
              </span>
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

        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
