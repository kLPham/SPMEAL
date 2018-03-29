import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cartButton = {
      marginLeft: '20px',
      marginBottom: '20px',
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'black',
      padding: '7px',
      paddingLeft: '15px',
      fontSize: '15px',
      textTransform: 'uppercase'
    };
    return (
      <div>
        <button style={cartButton}>Cart(0)</button>
      </div>
    );
  }
}
