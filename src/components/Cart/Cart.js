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
      cursor: 'pointer',
      borderRadius: '6px'
    };
    const basketStyle = {
      height: '35px',
      width: '30px',
      position: 'absolute',
      top: '23.5%',
      right: '11%',
      color: 'white'
    };
    return (
      <div>
        {' '}
        {/* <FaShoppingCart style={basketStyle} /> */}
        <button style={cartButton}>
          <FaShoppingCart style={basketStyle} />
          Cart(0)
        </button>
      </div>
    );
  }
}
