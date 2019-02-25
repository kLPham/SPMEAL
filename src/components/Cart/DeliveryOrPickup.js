import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

class DeliveryOrPickup extends Component {
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
    return (
      <div>
        <div>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}
          >
            {/* <img src={pageHeader} style={pageHeaderStyle} /> */}
            <Tab label="Delivery" value="/Cart/Delivery">
              {' '}
              {/* <h2>Delivery</h2> */}
            </Tab>
            <Tab label="Pickup" value="/Cart/Pickup">
              {/* {' '}
            <h2>Pickup</h2> */}
            </Tab>
          </Tabs>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(DeliveryOrPickup);
