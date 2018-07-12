import React, { Component } from 'react';

export default class TaxesFees extends Component {
  render() {
    return (
      <div style={{ fontSize: '16px', marginBottom: '5%', color: 'red' }}>
        <p2>Taxes:{`$${this.props.taxes.toFixed(2)}`} </p2>
      </div>
    );
  }
}
