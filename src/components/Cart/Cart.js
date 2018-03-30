import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cartButton = {
      marginLeft: '500px',
      marginBottom: '20px',
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'black',
      padding: '7px',
      fontSize: '15px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    return (
      <div>
        <button style={cartButton}>Cart(0)</button>
      </div>
    );
  }
}
