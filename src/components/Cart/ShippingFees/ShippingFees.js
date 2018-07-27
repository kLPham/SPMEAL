import React, { Component } from 'react';

export default class ShippingFees extends Component {
  render() {
    return (
      <div>
        {/* <p2>{this.props.fees.toFixed(2)}</p2> */}
        <p2>{this.props.fees}</p2>
      </div>
    );
  }
}
