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

class ScrollableTabsButtonForce extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

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
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab style={tabStyle} label="Delivery" icon={<PhoneIcon />}>
              <h2 style={{ fontSize: '25px' }} />
            </Tab>
            <Tab style={tabStyle} label="Pickup" icon={<PageviewIcon />} />
            <Tab style={tabStyle} label="Your Cart" icon={<ShoppingBasket />} />
            <Tab style={tabStyle} label="Help" icon={<HelpIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <h2 style={{ fontSize: '25px' }}> Please Call Us!</h2>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            {' '}
            {/* <h2 style={{ fontSize: '25px' }}>
              McKinney: <br />
              <p2 style={{ fontSize: '16px' }}>
                400 N Central Expressway Ste 102 McKinney, Texas
              </p2>
            </h2> */}
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
              You have {this.props.cart} items in your cart.
            </h2>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div style={{ fontSize: '25px' }}>
              <div>
                <h4 style={hpickupStyle}>Need assistant? Call us at:</h4>
                <p style={pStyle}> 1.972.984.0817</p>{' '}
              </div>
              <br />
              <div>
                <h4 style={hpickupStyle}>
                  If you need any help Contact SPM Headquarters:{' '}
                </h4>
                <p style={pStyle}>
                  400 N Central Expressway Ste 102 McKinney, Texas
                </p>
              </div>
            </div>
          </TabContainer>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
