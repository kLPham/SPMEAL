import React, { Component } from 'react';
import './Header.css';
/// MATERIAL UI BELOW ///
import RaisedButton from 'material-ui/RaisedButton'; // add
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
//////////////////////////
import { HashLink } from 'react-router-hash-link';
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
    this.state = {
      value: 1
    };
  }

  //HANDLE ACTION HERE:
  handleDropdownMenuChange(event, index, value) {
    this.setState({ value });
  }

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
    const cuteryStyle = {
      color: 'gray',
      paddingLeft: '43%',
      paddingBottom: '2%',
      height: '30px',
      width: '25px'
    };

    return (
      // <MuiThemeProvider>
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

            <Link to="/About" className="span">
              <span>About Us</span>
            </Link>
            <Link to="/Contact" className="span">
              <span>Contact</span>
            </Link>
            {/* MENU DROPDOWN BELOW */}

            <DropDownMenu
              value={this.state.value}
              onChange={this.handleDropdownMenuChange}
              primaryText="menu"
            >
              <FaCutlery style={cuteryStyle}> </FaCutlery>

              <MenuItem value={1} label="Menu">
                <h2 className="centerMeal">Our Menu</h2>
              </MenuItem>

              <a href="/Meals" className="menuStyle">
                <MenuItem value={2} primaryText="Full Menu" label="MENU" />
              </a>
              <a href="/Meals/SignatureMeals" className="menuStyle">
                {/* <FaCutlery /> */}
                <MenuItem
                  value={3}
                  label="Spartan Signature Meals"
                  primaryText="Spartan Signature Meals"
                />
              </a>
              <a href="/Meals/ByLB" className="menuStyle">
                <MenuItem
                  value={4}
                  label="By The Pounds"
                  primaryText="by the lbs"
                />
              </a>
              <a href="/Meals/CustomMeals" className="menuStyle">
                <MenuItem
                  value={5}
                  label="Custom Meals"
                  primaryText="Custom Meals"
                />
              </a>
            </DropDownMenu>
          </div>
          <Cart />
          <RaisedButton label="Default" />
        </div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
      </div>
      // </MuiThemeProvider>
    );
  }
}
