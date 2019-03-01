import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export default class Delivery extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND METHODS BELOW:
  }
  ///CREATE HANDLING CHANGES HERE:

  render() {
    return (
      <div>
        <h3>What is your address?</h3>
      </div>
    );
  }
}
