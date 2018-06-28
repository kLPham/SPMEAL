import React, { Component } from 'react';

export default class EstimatedTotal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: 'left',
            fontWeight: 900,
            fontSize: '25px'
          }}
        >
          Est. Total:{' '}
        </h2>
        <p2
          style={{
            marginLeft: '53%',
            marginTop: '-3%'
          }}
        >{`$${this.props.price}`}</p2>
      </div>
    );
  }
}
