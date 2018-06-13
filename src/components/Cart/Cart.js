import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { addToCart } from '../../ducks/reducer';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

//IMPORT MATERIALui BELOW:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { pinkA200, fullWhite, deepOrangeA400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Trash from 'react-icons/lib/fa/trash';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      cart: []
    };

    //BIND METHODS HERE:
    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
  }

  //GET ITEMS FROM DETAIL PAGE: //*get back to this
  componentWillMount() {
    axios.get('/api/cart').then(response => {
      this.setState({ cart: response.data });
    });
    //GET TOTAL PRICE FROM SERVER:
    axios.get(`/cart/total/${this.props.meals_id}`).then(response => {
      this.setState({ total: response.data[0].sum });
    });
  }
  //HANDLE ACTION BELOW:
  handleCartToggle() {
    this.setState({ open: !this.state.open });
  }

  handleCartClose() {
    this.setState({ open: false });
  }
  //REMOVE FROM CART FRONT_END: :)
  handleCartRemove(meals) {
    axios
      .delete(`/api/cart/${meals.meals_id}`)
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
    alert('This meal has been remove from your shopping cart!');
  }

  render() {
    const muiTheme = getMuiTheme({
      appBar: {
        height: 70
      }
    });
    const styleSize = {
      fontSize: '20px',
      fontWeight: 'bold'
    };
    const basketStyle = {
      height: '35px',
      width: '30px',
      position: 'relative',
      color: 'black',
      paddingRight: '100px',
      cursor: 'pointer'
    };
    // const style = {
    //   marginBottom: '5%'
    // };
    const checkOutButtonStyle = {
      width: '280px',
      height: '5%',
      backgroundColor: 'green',
      color: 'white',
      fontSize: '25px',
      marginRight: '8%',
      cursor: 'pointer'
    };
    const wholeMealStyle = {
      marginLeft: '17%',
      textAlign: 'left',
      fontSize: '80%'
    };

    const mealImageStyle = {
      height: '200px',
      width: '200px'
    };
    const removeButton = {
      height: '15%',
      width: '35%',
      backgroundColor: 'red',
      color: 'white',
      cursor: 'pointer'
    };
    const subTotalStyle = {
      marginLeft: '15%',
      fontSize: '25px',
      backgroundColor: 'gainsboro',
      paddingTop: '8%',
      marginBottom: '10%',
      color: 'black',
      height: '5%',
      width: '70%'
    };

    let displayInCart =
      this.state.cart.length > 0 ? (
        this.state.cart.map(eachMeal => {
          return (
            <div style={wholeMealStyle}>
              <div key={eachMeal.id}>
                <img
                  style={mealImageStyle}
                  alt="image_url"
                  src={eachMeal.image_url}
                />
                <p>{eachMeal.meals_name}</p>
                <p>QTY:{eachMeal.quantity}</p>
                <p>PRICE: ${eachMeal.price}</p>
              </div>
              <button
                style={removeButton}
                onClick={() => this.handleCartRemove(eachMeal)}
              >
                Remove
              </button>
              <hr />
            </div>
          );
        })
      ) : (
        <p style={{ color: 'red', textAlign: 'center' }}>Your Cart is empty</p>
      );

    return (
      <div>
        <FaShoppingCart style={basketStyle} onClick={this.handleCartToggle} />
        <Drawer
          style={styleSize}
          docked={false}
          width={300}
          zDepth={2}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar
              title="Shopping Cart"
              width={70}
              style={{ backgroundColor: 'black' }}
            />
          </MuiThemeProvider>
          <MenuItem onClick={this.handleClose} />
          <div> {displayInCart}</div>

          <div style={subTotalStyle}>
            <p style={wholeMealStyle}>
              Subtotal: ${this.state.cart.length &&
                this.state.cart.reduce((total, eachMeal) => {
                  var priceTotal = eachMeal.price * eachMeal.quantity;
                  total += priceTotal;
                  return total;
                }, 0)}
            </p>
          </div>
          <button>
            <MenuItem style={checkOutButtonStyle} onClick={this.handleClose}>
              Proceed To CheckOut
            </MenuItem>
          </button>
        </Drawer>
      </div>
    );
  }
}
