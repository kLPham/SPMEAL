import React, { Component } from 'react';

export default class PickupSavings extends Component {
  render() {
    return (
      <div style={{ fontSize: '13px' }}>
        <p2>Pickup Savings:</p2>
        <p2 style={{ color: 'red' }}>{`$${this.props.price}`}</p2>
      </div>
    );
  }
}
