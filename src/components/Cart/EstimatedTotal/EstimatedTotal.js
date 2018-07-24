import React, { Component } from 'react';

export default class EstimatedTotal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 style={{ fontWeight: 900, color: 'black', fontSize: '19px' }}>
          ${this.props.price.toFixed(2)}
        </h2>
      </div>
    );
  }
}
