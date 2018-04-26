import React, { Component } from 'react';
import './Meals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    this.state = {
      displayMeals: []
    };

    //BIND METHODS BELOW:
  }
  // /// REQUEST FOR DATA OF ALL MEALS ///
  // componentDidMount() {
  //   axios.get('/api/meals').then(response => {
  //     this.setState({ displayMeals: response.data });
  //     console.log('meals data just went through', response);
  //   });
  // }

  render() {
    // const allMeals = this.state.displayMeals.map(allMeals => {
    //   console.log('meals rendering', allMeals);
    // });

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
      paddingTop: '2.5%'
    };

    const menuTitle = {
      fontSize: '24px',
      color: 'Green',
      textTransform: 'uppercase',
      fontFamily: 'cursive'
    };

    const bothStyles = {
      div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%',
        marginLeft: '1%'
      },
      paperLeft: {
        flex: 1,
        height: 600,
        width: '100%',
        paddingTop: '2%',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        marginRight: '2%',
        textAlign: 'center',
        fontStretch: 'expanded'
      },
      paperRight: {
        height: 600,
        flex: 4,
        paddingLeft: 10,
        width: '92%',
        textAlign: 'center'
      }
    };
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
          {/* <div>
            {' '}
            {this.state.displayMeals.map(displayMeals => (
              <p>{displayMeals.name}</p>
            ))}
          </div> */}
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
                <div className="fixedContainer">Meal Type Here</div>

                <div className="overflow-content">
                  <Paper zDepth={3} style={style}>
                    <h4>
                      {/* {this.state.displayMeals.map(displayMeals => (
                        <p>
                          {displayMeals.name}
                          {displayMeals.price}
                        </p>
                      ))} */}
                    </h4>
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
          {/* GET DATA HERE: */}
        </div>

        {/* <div>
          {' '}
          {this.state.displayMeals.map(displayMeals => (
            <p>{displayMeals.price}</p>
          ))}
        </div> */}

        {this.props.children}
      </div>
    );
  }
}
