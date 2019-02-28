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
  handleCallToRouter(value) {
    this.props.history.push(value);
  }

  render() {
    const tabStyle = {
      backgroundColor: 'black',
      color: '#f2f2f2',
      fontWeight: 900
    };
    return (
      <div>
        <div style={{ color: 'white' }}>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}
          >
            <Tab
              label="Delivery"
              value="/DeliveryOrPickup/Delivery"
              style={tabStyle}
            />
            <Tab
              label="Pickup"
              value="/DeliveryOrPickup/Pickup"
              style={tabStyle}
            />
          </Tabs>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(DeliveryOrPickup);
