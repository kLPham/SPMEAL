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

// import ReactTooltip from 'react-tooltip';

export default class Header extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE:
    this.state = {
      value: 1,
      active: null
    };
  }

  //HANDLE ACTION HERE:
  handleDropdownMenuChange(event, index, value) {
    this.setState({ value });
  }
  handleToggleChange(position) {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  }
  handleColorChange(position) {
    if (this.state.active === position) {
      return 'red';
    }
    return '';
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
      color: '#9ACD32',
      height: '40px',
      width: '35px'
    };
    const labelStyle = {
      color: '#9ACD32',
      textTransform: 'uppercase',
      cursor: 'default',
      textAlign: 'center',
      // marginTop: '25%',
      marginBottom: '-6%',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      opacity: 10
    };
    return (
      // <MuiThemeProvider>
      <div>
        <div className="secondHeader" style={header}>
          <img alt="icon" src={storeIcon} style={iconsLogo} />
          <div className="list">
            <Link to="/" className="span">
              <span
                style={{ color: this.handleColorChange(0) }}
                // { background: this.handleBackgroundColorChange(0) },
                onClick={() => {
                  this.handleToggleChange(0);
                }}
              >
                <FaHome style={homeIconStyle} />
              </span>
            </Link>

            <Link to="/HowItWorks" className="span">
              <span
                style={{ color: this.handleColorChange(1) }}
                onClick={() => {
                  this.handleToggleChange(1);
                }}
              >
                How It Works
              </span>
            </Link>
            <Link to="/About" className="span">
              <span
                style={{ color: this.handleColorChange(2) }}
                onClick={() => {
                  this.handleToggleChange(2);
                }}
              >
                About Us
              </span>
            </Link>

            {/* SUPPORT DROPDOWN BELOW */}
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleDropdownMenuChange}
              primaryText="support"
            >
              <MenuItem value={1} label="SUPPORT">
                <h1 style={labelStyle} className="centerMeal" />
              </MenuItem>
              <a href="/Meals/SignatureMeals" className="menuStyle">
                <MenuItem
                  value={2}
                  label="Store Locator"
                  primaryText="STORE LOCATOR"
                />
              </a>
              <a href="#" className="menuStyle">
                <MenuItem value={3} primaryText="FAQ" label="FAQ" />
              </a>
              <a href="/Contact" className="menuStyle">
                <MenuItem value={4} primaryText="contact" label="CONTACT" />
              </a>
            </DropDownMenu>
            {/* MENU DROPDOWN BELOW */}
            <a data-tip="Click here to see our full menu!">
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleDropdownMenuChange}
                primaryText="menu"
              >
                {/* <FaCutlery style={cuteryStyle} /> */}
                <MenuItem value={1} label="SHOP">
                  <h1 style={labelStyle} className="centerMeal">
                    <FaCutlery style={cuteryStyle} />Our Menu
                  </h1>
                </MenuItem>
                <a href="/Meals/FullMenu" className="menuStyle">
                  <MenuItem value={2} primaryText="Full Menu" label="MENU" />
                </a>
                <a href="/Meals/SignatureMeals" className="menuStyle">
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
                <a href="#" className="menuStyle">
                  <MenuItem value={6} label="APPAREL" primaryText="APPAREL" />
                </a>
              </DropDownMenu>
            </a>
            {/* <ReactTooltip place="bottom" type="success" effect="float" /> */}
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
