import React, { Component } from 'react';

export default class EstimatedTotal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 style={{ fontWeight: 900, color: 'green' }}>
          Total: {`$${this.props.price}`}
        </h2>
      </div>
    );
  }
}
