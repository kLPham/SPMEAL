import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cartButton = {
      marginRight: '50px',
      marginTop: '8.5%',
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
