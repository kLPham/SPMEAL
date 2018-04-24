import React, { Component } from 'react';
/// MATERIAL UI BELOW ///
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; // add
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
//////////////////////////

import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import storeIcon from './storeIcon.jpg';
import Cart from '../Cart/Cart';
// import SearchBar from './components/SearchBar/SearchBar';
// import Login from './components/Login/Login';

export default class Header extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE:
    this.state = {};
  }

  //HANDLE ACTION HERE:

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
      <MuiThemeProvider>
        <div>
          {/* MATERIAL-UI BELOW */}

          <div className="secondHeader" style={header}>
            <img alt="icon" src={storeIcon} style={iconsLogo} />
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
                {/* <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  openImmediately={true}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu> */}
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
        </div>
      </MuiThemeProvider>
    );
  }
}
