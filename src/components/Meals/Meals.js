import React, { Component } from 'react';
import './Meals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import mealsBg from './images/mealsBg.jpeg';
import FullMenu from './FullMenu/FullMenu';
/// IMPORT MATERIAL-UI ///
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';

/// IMPORT ICONS HERE ///
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

import pageHeader from './pageHeader.jpg';
import breakfast from './images/breakfast.jpg';
import spartanHawaiianChicken from './images/spartanHawaiianChicken.jpg';
import steakbythelb from './images/steakbythelb.jpg';

export default class Meals extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND METHODS BELOW:
  }

  render() {
    const pageHeaderStyle = {
      height: '20%',
      width: '100%'
    };
    const cutleryStyle = {
      height: '55px',
      width: '55px',
      alignItems: 'center',
      color: 'gray',
      paddingBottom: '6%',
      paddingTop: '2.5%',
      marginLeft: '45%'
    };

    const menuTitle = {
      fontSize: '24px',
      color: 'Green',
      textTransform: 'uppercase',
      fontFamily: 'cursive'
    };

    const leftBarStyle = {
      height: '50%',
      width: '20%',
      position: 'relative',
      display: 'flex',
      marginTop: '2.5%',
      marginLeft: '5%',
      float: 'left'
    };
    const insideLeftBarStyle = {
      padding: '5%'
    };
    return (
      <div>
        <img src={pageHeader} style={pageHeaderStyle} />
        <h2 style={menuTitle}>Our Menu</h2>
        {/* LEFT BELOW: */}
        <div className="container">
          <div style={leftBarStyle}>
            <Paper zDepth={3} style={insideLeftBarStyle}>
              <FaCutlery style={cutleryStyle} />
              <Link to="/Meals/FullMenu" className="meals">
                <h4>Full Menu</h4>
              </Link>
              <Link to="/Meals/SignatureMeals" className="meals">
                <h4>Spartan Signature Meals</h4>
              </Link>
              <Link to="/Meals/ByLB" className="meals">
                <h4>Spartan By the LB</h4>
              </Link>
              <Link to="/Meals/CustomMeals" className="meals">
                <h4>Spartan Custom Meals</h4>
              </Link>
              <Link to="/Meals/SignatureMeals" className="meals">
                <h4>Spartan Breakfast</h4>
              </Link>
              {/* <button className="customOrder">
              <FaPlusCircle />
              Create Custom Order
            </button> */}
            </Paper>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
