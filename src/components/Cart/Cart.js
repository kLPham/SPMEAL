import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cartButton = {
      marginRight: '60px',
      marginTop: '3%',
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'black',
      padding: '15px',
      paddingLeft: '19%',
      paddingRight: '19%',
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
