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
    this.state = {
      value: 'a'
    };

    //BIND METHODS BELOW:
  }
  ///CREATE HANDLING CHANGES HERE:
  // handleChange = value => {
  //   this.setState({
  //     value: value
  //   });
  // };
  handleCallToRouter = value => {
    this.props.history.push(value);
  };

  render() {
    const pageHeaderStyle = {
      height: '20%',
      width: '100%'
    };
    const cutleryStyle = {
      height: '25px',
      width: '25px',
      color: 'gray'
    };

    // const menuTitle = {
    //   fontSize: '24px',
    //   color: 'Green',
    //   textTransform: 'uppercase',
    //   fontFamily: 'cursive'
    // };
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
      }
    };

    return (
      <div>
        <img src={pageHeader} style={pageHeaderStyle} />
        {/* <h2 style={menuTitle}>Our Menu</h2> */}
        {/* <FaCutlery style={cutleryStyle} /> */}
        <div>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}
          >
            <Tab label="Full Menu" value="/Meals/FullMenu">
              {' '}
              <h2 style={styles.headline}>
                Full Menu<FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>

            <Tab label="Spartan Signature Meals" value="/Meals/SignatureMeals">
              <h2 style={styles.headline}>
                {' '}
                Signature Meals<FaCutlery style={cutleryStyle} />
              </h2>
            </Tab>
            <Tab label="Spartan By the LB" value="/Meals/ByLB">
              {' '}
              <h2 style={styles.headline}>
                By the LB<FaCutlery style={cutleryStyle} />
              </h2>{' '}
            </Tab>
            <Tab label="Spartan Custom Meals" value="/Meals/CustomMeals">
              <h2 style={styles.headline}>
                Custom Meals<FaCutlery style={cutleryStyle} />
              </h2>{' '}
            </Tab>
          </Tabs>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Meals);
