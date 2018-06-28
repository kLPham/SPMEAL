import React, { Component } from 'react';

export default class EstimatedCTotal extends Component {
  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: 'left',
            marginLeft: '20%',
            fontWeight: 900,
            fontSize: '25px'
          }}
        >
          Est. Total:
        </h2>
        <p
          style={{
            marginLeft: '43%',
            marginTop: '-7%',
            fontWeight: 900,
            fontSize: '20px'
          }}
        >{`$${this.props.price}`}</p>
      </div>
    );
  }
}
