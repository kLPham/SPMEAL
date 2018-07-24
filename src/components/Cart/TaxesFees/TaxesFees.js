import React, { Component } from 'react';

export default class TaxesFees extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: '14px',
          marginBottom: '5%',
          color: 'red',
          marginLeft: '2%'
        }}
      >
        <p2>${this.props.taxes.toFixed(2)} </p2>
      </div>
    );
  }
}
