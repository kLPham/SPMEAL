import React, { Component } from 'react';
import './Meals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import mealsBg from './images/mealsBg.jpeg';
import FullMenu from './FullMenu/FullMenu';
/// IMPORT MATERIAL-UI ///
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';

/// IMPORT ICONS HERE ///
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

import pageHeader from './pageHeader.jpg';
import breakfast from './images/breakfast.jpg';
import spartanHawaiianChicken from './images/spartanHawaiianChicken.jpg';
import steakbythelb from './images/steakbythelb.jpg';

class Meals extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND METHODS BELOW:
  }
  ///CREATE HANDLING CHANGES HERE:
  handleCallToRouter = value => {
    this.props.history.push(value);
  };

  render() {
    const pageHeaderStyle = {
      height: '20%',
      width: '100%',
      filter: 'brightness(86%)'
    };
    const cutleryStyle = {
      height: '25px',
      width: '25px',
      color: 'red'
    };
    const styles = {
      headline: {
        position: 'relative',
        fontSize: 25,
        textTransform: 'uppercase',
        marginBottom: 12,
        marginTop: 12,
        fontWeight: 'bold'
      }
    };
    const tabStyle = {
      backgroundColor: '#f2f2f2',
      color: 'black',
      fontWeight: 900
    };

    return (
      <div style={{ marginTop: '7%' }}>
        <img src={pageHeader} style={pageHeaderStyle} />
        <h2
          style={{
            position: 'absolute',
            top: '25%',
            left: '35%',
            transform: 'translate(-20%, -50%)',
            color: '#ffffff',
            zIndex: 1,
            fontWeight: 700
          }}
        >
          YOUR HOME JUST GOT A LOT MORE DELICIOUS.
        </h2>
        <div>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}
          >
            {/* <img src={pageHeader} style={pageHeaderStyle} /> */}
            <Tab label="Full Menu" value="/Meals/FullMenu" style={tabStyle}>
              {' '}
              {/* <img src={pageHeader} style={pageHeaderStyle} /> */}
              <h2 style={styles.headline}>
                Full Menu
                <FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>

            <Tab
              label="Breakfast"
              value="/Meals/FeaturedBreakfast"
              style={tabStyle}
            >
              <h2 style={styles.headline}>
                {' '}
                Breakfast
                <FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>

            <Tab
              label="Lunch & Dinner"
              value="/Meals/FeaturedLnD"
              style={tabStyle}
            >
              <h2 style={styles.headline}>
                {' '}
                Lunch & Dinner
                <FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>

            <Tab label="By the LB" value="/Meals/ByLB" style={tabStyle}>
              {' '}
              <h2 style={styles.headline}>
                By the LB
                <FaCutlery style={cutleryStyle} />
              </h2>{' '}
            </Tab>
            <Tab
              label="Signature Meals"
              value="/Meals/SignatureMeals"
              style={tabStyle}
            >
              <h2 style={styles.headline}>
                {' '}
                Signature Meals
                <FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>

            <Tab
              label="Custom Meals"
              value="/Meals/CustomMeals"
              style={tabStyle}
            >
              <h2 style={styles.headline}>
                Custom Meals
                <FaCutlery style={cutleryStyle} />
              </h2>{' '}
            </Tab>

            <Tab label="Dessert" value="/Meals/Dessert" style={tabStyle}>
              <h2 style={styles.headline}>
                Dessert
                <FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>
          </Tabs>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Meals);
