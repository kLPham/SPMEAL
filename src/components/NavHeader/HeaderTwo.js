import React, { Component } from 'react';
import './NavHeader.css';
/// MATERIAL UI BELOW ///
import RaisedButton from 'material-ui/RaisedButton'; // add
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
//////////////////////////
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import FaHome from 'react-icons/lib/fa/home';
// import FaCutlery from 'react-icons/lib/fa/cutlery';
import storeIcon from './storeIcon.jpg';
import Cart from '../Cart/Cart';
import SearchBar from '../SearchBar/SearchBar';

import Login from '../Login/Login';
// import TopHeader from './TopHeader';
import HeaderOne from './HeaderOne';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

export default class HeaderTwo extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE:
    this.state = {};
  }

  //HANDLE ACTION HERE:

  render() {
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
    const cuteryStyle = {
      color: '#9ACD32',
      height: '40px',
      width: '35px'
    };
    const labelStyle = {
      color: '#9ACD32',
      cursor: 'default',
      textAlign: 'center',
      marginTop: '5%',
      mariginLeft: '-5%',
      marginBottom: '-6%',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      opacity: 10
    };

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '1%',
          zIndex: 2
        }}
        className="testHeader"
      >
        <Navbar inverse collapseOnSelect>
          <Nav
            style={{
              display: 'flex',
              marginLeft: '90%',
              marginTop: '1%',
              marginBottom: '-2%'
            }}
          >
            {/* <NavItem>
              <SearchBar />
            </NavItem> */}
            {/* <NavItem eventKey={1}> */}
            <div style={{ marginRight: '25%' }}>
              {' '}
              <Login />
            </div>
            {/* </NavItem>
            <NavItem eventKey={2}> */}
            <div>
              <Cart />
            </div>
            {/* </NavItem>*/}
          </Nav>
        </Navbar>
        <Navbar staticTop style={{ marginTop: '-1.55%' }}>
          <Navbar.Header
            pullLeft
            style={{ marginLeft: '-10%', marginRight: '15%', marginTop: '-2%' }}
          >
            <Navbar.Brand>
              {' '}
              <img
                alt="icon"
                src={storeIcon}
                style={{
                  height: '100px',
                  width: '120px',
                  marginLeft: '3%',
                  border: '5px solid lightgray',
                  marginTop: '-13%'
                }}
              />
            </Navbar.Brand>
          </Navbar.Header>
          <Nav
            style={{
              fontSize: '15px',
              height: '100%',
              marginLeft: '-15%',
              color: 'black',
              cursor: 'default',
              fontWeight: 900,
              textTransform: 'uppercase'
            }}
          >
            <NavItem eventKey={1} href="/">
              <FaHome
                style={{
                  height: '30px',
                  width: '30px',
                  marginTop: '-35%'
                }}
              />
            </NavItem>
            <NavItem eventKey={2} href="/HowItWorks">
              How It Works
            </NavItem>
            <NavItem eventKey={3} href="/About">
              About Us
            </NavItem>

            <NavDropdown eventKey={4} title="Support" id="basic-nav-dropdown">
              <Icon
                name="info circle"
                size="big"
                style={{
                  marginTop: '-2%',
                  boxSizing: 'contentBox',
                  width: '100%',
                  height: '20%',
                  border: '5px solid lightgray',
                  paddingLeft: '5%',
                  paddingRight: '5%'
                }}
              />
              <a href="/Contact">
                <MenuItem value={1} eventKey={4.1} className="menuStyle">
                  Customer Service
                </MenuItem>
              </a>
              <a href="/Support/FAQ" className="menuStyle">
                <MenuItem value={2} eventKey={4.2}>
                  FAQ
                </MenuItem>
              </a>

              <a href="/Support/StoreLocator" className="menuStyle">
                <MenuItem value={3} eventKey={4.3}>
                  Store Locator
                </MenuItem>
              </a>
            </NavDropdown>
            {/* ///SHOP */}

            <NavDropdown eventKey={5} title="Menu" id="basic-nav-dropdown">
              <Icon
                name="food"
                size="big"
                style={{
                  marginTop: '-2%',
                  boxSizing: 'contentBox',
                  width: '100%',
                  height: '30%',
                  border: '5px solid lightgray',
                  paddingLeft: '5%',
                  paddingRight: '5%'
                }}
              />

              <a href="/Meals/FullMenu">
                <MenuItem
                  primaryText="Our Full Menu"
                  label="MENU"
                  className="menuStyle"
                />
              </a>
              <a href="/Meals/SignatureMeals">
                <MenuItem
                  label="Signature Meals"
                  primaryText="Signature Meals"
                  className="menuStyle"
                />
              </a>
              <a href="/Meals/ByLB">
                <MenuItem
                  label="By The Pounds"
                  primaryText="Items By The Pounds"
                  className="menuStyle"
                />
              </a>
              <a href="/Meals/CustomMeals">
                <MenuItem
                  label="Custom Meals"
                  primaryText="Custom Meals"
                  className="menuStyle"
                />
              </a>
              <a href="/Meals/Dessert">
                <MenuItem
                  label="Dessert"
                  primaryText="Dessert"
                  className="menuStyle"
                />
              </a>
              <a href="#">
                <MenuItem
                  label="catering"
                  primaryText="Catering"
                  className="menuStyle"
                />
              </a>
              <a href="#">
                <MenuItem
                  label="Apparels"
                  primaryText="Apparels"
                  className="menuStyle"
                />
              </a>
            </NavDropdown>
            {/* <FaCutlery /> */}
          </Nav>
        </Navbar>;
      </div>
    );
  }
}
