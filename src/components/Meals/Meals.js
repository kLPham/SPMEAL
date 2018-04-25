import React, { Component } from 'react';
import './Meals.css';
import RaisedButton from 'material-ui/RaisedButton';
// import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Paper from 'material-ui/Paper';

import { Link } from 'react-router-dom';
import pageHeader from './pageHeader.jpg';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

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
      color: 'gray'
    };
    // const sideBar = {
    //   textAlign: 'center',
    //   marginLeft: '4%',
    //   marginBottom: '15%',
    //   paddingTop: '2%',
    //   height: '100%',
    //   width: '14%'
    // };
    const menuTitle = {
      fontSize: '24px',
      color: 'Green',
      textTransform: 'uppercase',
      fontFamily: 'cursive'
    };
    // const styles = {
    //   root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'space-around'
    //   },
    //   gridList: {
    //     width: 900,
    //     height: 650,
    //     overflowY: 'auto'
    //   }
    // };
    //TESTING

    const bothStyles = {
      div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%',
        marginLeft: '3%'
      },
      paperLeft: {
        flex: 1,
        height: 600,
        width: '20%',
        marginRight: '5%',
        textAlign: 'center'
      },
      paperRight: {
        height: 600,
        flex: 4,
        paddingLeft: 20,
        width: '80%',
        textAlign: 'center'
      }
    };
    // const rightStyles = {
    //   div: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     padding: 20,
    //     width: '50%',
    //     height: '100%'
    //   },
    //   paperRight: {
    //     height: 600,
    //     flex: 4,
    //     margin: 10,
    //     textAlign: 'center'
    //   }
    // };
    const style = {
      height: 350,
      width: 350,
      margin: 15,
      textAlign: 'center',
      display: 'inline-block',
      overflowY: 'auto'
    };

    return (
      <div>
        <img src={pageHeader} style={pageHeaderStyle} />
        <h2 style={menuTitle}>Our Menu</h2>
        {/* <RaisedButton label="Default" />
        {/* LEFT BELOW: */}
        <div style={bothStyles.div}>
          <Paper zDepth={3} style={bothStyles.paperLeft}>
            <FaCutlery style={cutleryStyle} />
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
            <Link to="/Meals/SignatureMeals" className="meals">
              <h4>Spartan Lunch</h4>
            </Link>
            <Link to="/Meals/SignatureMeals" className="meals">
              <h4>Spartan Dinner</h4>
            </Link>
            <button className="customOrder">
              <FaPlusCircle />
              Create Custom Order
            </button>
          </Paper>

          {/* RIGHT BELOW */}
          <div className="content-wrapper">
            <div className="overflow-container">
              <Paper zDepth={3} style={bothStyles.paperRight}>
                <h4>Second Vertical component</h4>
                <div className="overflow-content">
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                  <Paper zDepth={3} style={style}>
                    <h4>Meals here</h4>
                  </Paper>
                </div>
              </Paper>
            </div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}
