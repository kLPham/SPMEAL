import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

import PageviewIcon from '@material-ui/icons/Pageview';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';

import FormDialog from './FormDialog';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    fontSize: '25px',
    backgroundColor: theme.palette.background.paper
  }
});

class DeliveryNPickup extends Component {
  constructor(props) {
    super(props);

    //SET INTITIAL STATE HERE:
    this.state = {
      value: 0,
      open: false,
      //inital state for delivery form below:
      name: 'Kelly',
      streetNumberNName: '4227 Boyer Pl',
      aptOrSuite: 0,
      city: 'Dallas',
      stateCity: 'TX',
      zip: 75219
    };

    //BIND HANDLERS HERE:
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);

    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  //handle toggle open dialog when select delivery:
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  // handleActive(tab) {
  //   alert(tab.props);
  // }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const tabStyle = {
      fontWeight: 700,
      fontSize: '16px',
      textTransform: 'lowerCase',
      borderRadius: '10px',
      border: '1px solid white'
    };
    const pStyle = {
      fontSize: '12px',
      color: 'black',
      marginLeft: '1%'
    };
    const hpickupStyle = { color: 'green', fontSize: '16px' };
    return (
      <div className={classes.root}>
        <AppBar position="center" color="error">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            fullWidth
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              style={tabStyle}
              label="Your Basket"
              // onAction={this.handleClickOpen}
              icon={<ShoppingBasket />}
            />
            <Tab style={tabStyle} label="Pickup" icon={<PageviewIcon />} />{' '}
            <Tab style={tabStyle} label="Delivery" icon={<PhoneIcon />} />
            <Tab style={tabStyle} label="Help" icon={<HelpIcon />} />
            {/* <Tab
              style={tabStyle}
              label="onActive"
              data-route="/"
              onActive={this.handleActive}
            /> */}
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <h2 style={{ fontSize: '25px' }}>
              You have {this.props.cart} items in your cart.
            </h2>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            {/* <h2 style={{ fontSize: '15px' }}>Pick a Location Near You.</h2> */}
            <ul>
              <li>
                <h3 style={hpickupStyle}>
                  EMPIRE FITNESS{' '}
                  <p style={pStyle}>
                    {' '}
                    400 N Central ExpressWay ste 102 Mckinney, Tx 75069
                  </p>
                </h3>
              </li>
              <li>
                <h3 style={hpickupStyle}>
                  Metro-Flex Ft Worth, The Castle{' '}
                  <p style={pStyle}> 5501 Thelin St Fort Worth, Tx 76115</p>
                </h3>
              </li>
              <li>
                <h3 style={hpickupStyle}>
                  Extreme Iron Pro Gym
                  <p style={pStyle}>
                    {' '}
                    17390 Preston Rd STE 360, Dallas, Tx 75252
                  </p>
                </h3>
              </li>
            </ul>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <h2 style={{ fontSize: '25px' }}>
              {' '}
              <FormDialog
                key={0}
                id={0}
                isSaved={false}
                numSaves={10}
                name={this.state.name}
                address="12345 lovefield Dr"
                streetNumberNName={this.state.streetNumberNName}
                aptOrSuite={this.state.aptOrSuite}
                city={this.state.city}
                stateCity={this.state.stateCity}
                zip={this.state.zip}
              >
                Address Form
              </FormDialog>
            </h2>
            {/* <h2 style={{ fontSize: '25px' }}>
              You have {this.props.cart} items in your cart.
            </h2> */}
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div style={{ fontSize: '25px' }}>
              <div>
                <h4 style={hpickupStyle}>Need assistant? Contact Us:</h4>
                <p style={pStyle}> 972.984.0817</p>{' '}
              </div>
              <br />
              <div>
                <h4 style={hpickupStyle}>Contact SPM Headquarters: </h4>
                <p style={pStyle}>
                  400 N Central Expressway Ste 102 McKinney, Texas
                </p>
              </div>
            </div>
          </TabContainer>
        )}
        {/* {value === 4 && (
          <TabContainer>
            <div>
              <p>Jsut trying this out</p>
            </div>
          </TabContainer>
        )} */}
      </div>
    );
  }
}

DeliveryNPickup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeliveryNPickup);
