import React, { Component } from 'react';
import './Meals.css';
import pageHeader from './pageHeader.jpg';
import { Link } from 'react-router-dom';
import FaCutlery from 'react-icons/lib/fa/cutlery';

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
      marginLeft: '40%',
      color: 'gray'
    };
    const sideBar = {
      marginLeft: '4.2%',
      marginBottom: '5%',
      paddingTop: '2%',
      height: '460px',
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
            <Link to="/Meals/Breakfast" className="meals">
              <span>Spartan Custom Meals</span>
            </Link>

            <Link to="/Meals/Lunch" className="meals">
              <span>Spartan Signature Meals</span>
            </Link>

            <Link to="Meals/Dinner" className="meals">
              <span>Spartan By the LB</span>
            </Link>
            <button className="customOrder">+Create Custom Order</button>
          </div>
        </div>
      </div>
    );
  }
}
