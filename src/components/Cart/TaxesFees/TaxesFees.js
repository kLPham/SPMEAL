import React, { Component } from 'react';

export default class TaxesFees extends Component {
  render() {
    return (
      <div style={{ fontSize: '13px', marginBottom: '5%' }}>
        <p2>Est. taxes & fees (Based on 75219): </p2>
        <p2>{`$${this.props.taxes}`}</p2>
      </div>
    );
  }
}
