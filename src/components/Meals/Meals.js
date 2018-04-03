import React, { Component } from 'react';
import './Meals.css';
import pageHeader from './pageHeader.jpg';
import { Link } from 'react-router-dom';

export default class Meals extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const pageHeaderStyle = {
      height: '20%',
      width: '100%'
    };
    const sideBar = {
      marginTop: '5%',
      marginLeft: '2%',
      marginBottom: '5%',
      paddingTop: '3%',
      height: '500px',
      width: '25%'
    };
    return (
      <div>
        <img src={pageHeader} style={pageHeaderStyle} />
        <div>
          <div style={sideBar} className="sideBar">
            <h3 className="title">Lunch/Dinner</h3>

            <span>Breakfast</span>

            <span>Lunch</span>

            <span>Dinner</span>
          </div>
        </div>
      </div>
    );
  }
}
