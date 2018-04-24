import React, { Component } from 'react';
import './MealsLandingPage.css';
import { Link } from 'react-router-dom';
import pageHeader from './pageHeader.jpg';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

export default class MealsLandingPage extends Component {
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
      marginLeft: '40%',
      color: 'gray'
    };
    const sideBar = {
      marginLeft: '4.2%',
      marginBottom: '2%',
      paddingTop: '2%',
      height: '400px',
      width: '25%'
    };
    const menuTitle = {
      fontSize: '24px',
      color: 'Green',
      textTransform: 'uppercase',
      fontFamily: 'cursive'
    };

    return (
      <div>
        <img src={pageHeader} style={pageHeaderStyle} />
        <h2 style={menuTitle}>Our Menu</h2>
        <div>
          <div style={sideBar} className="sideBar">
            <FaCutlery style={cutleryStyle} />
            <Link to="/Meals/CustomMeals" className="meals">
              <span>Spartan Custom Meals</span>
            </Link>

            <Link to="/Meals/SignatureMeals" className="meals">
              <span>Spartan Signature Meals</span>
            </Link>

            <Link to="/Meals/ByLB" className="meals">
              <span>Spartan By the LB</span>
            </Link>
            <button className="customOrder">
              <FaPlusCircle />
              Create Custom Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
