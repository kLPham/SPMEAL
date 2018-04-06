import React, { Component } from 'react';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cartButton = {
      marginRight: '120px',
      marginTop: '3%',
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'black',
      padding: '10px',
      paddingLeft: '25%',
      paddingRight: '7%',
      fontSize: '19px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    const basketStyle = {
      height: '30px',
      width: '25px',
      position: 'absolute',
      top: '30%',
      right: '10.9%',
      color: 'white'
    };
    return (
      <div>
        {' '}
        <FaShoppingCart style={basketStyle} />
        <button style={cartButton}>Cart(0)</button>
      </div>
    );
  }
}
