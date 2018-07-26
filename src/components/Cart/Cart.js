import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { addToCart } from '../../ducks/reducer';
// import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

import { Button, Icon } from 'semantic-ui-react';
// import Badge from 'material-ui/Badge';

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

import TaxesFees from './TaxesFees/TaxesFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import CheckoutWStripe from '../CheckoutWStripe';
import Swal from 'sweetalert2';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      cart: [],
      taxes: 0.087,
      value: 0
    };

    //BIND METHODS HERE:
    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleAddToCheckout = this.handleAddToCheckout.bind(this);
  }

  //GET ITEMS FROM DETAIL PAGE: //*get back to this
  componentWillMount() {
    axios.get('/api/cart').then(response => {
      this.setState({
        rehydrated: true,
        cart: response.data,
        value: this.state.value
      });
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

  handleCartRemove(meals) {
    axios
      .delete(`/api/cart/${meals.meals_id}`)
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
  }

  //POST ON checkout PAGE
  handleAddToCheckout(item) {
    //:)
    axios
      .post('/api/CheckoutWStripe', { item: item })
      .then(response => this.setState({ checkout: response.data }))
      .catch(console.log);
    window.location.href = 'http://localhost:3000/CheckoutWStripe';
    // alert("let's go pay!");
    Swal({
      title: 'Go To Checkout!',
      // text: '',
      type: 'success',
      confirmButtonText: 'Confirm'
    });
  }

  render() {
    const muiTheme = getMuiTheme({
      appBar: {
        height: 70
      }
    });

    const basketStyle = {
      height: '35px',
      width: '30px',
      position: 'relative',
      color: 'black',
      paddingRight: '100px',
      cursor: 'pointer'
    };

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
      cursor: 'pointer',
      display: 'flex',
      padding: '2%'
    };
    const calculating =
      this.state.cart.length &&
      this.state.cart.reduce((total, eachMeal) => {
        // var priceTotal = eachMeal.price * this.props.quantityValue; NEED TO FIX QUANTITY*
        var priceTotal = eachMeal.price * eachMeal.quantity;
        total += priceTotal;
        return total;
      }, 0);
    // console.log(this.props.totalPrice);
    // console.log(this.props.qty);
    // console.log(this.props.selectedItems);

    let displayInCart =
      this.state.cart.length > 0 ? (
        this.state.cart.map(eachMeal => {
          console.log(eachMeal.price * this.props.quantityValue);
          return (
            <div style={wholeMealStyle}>
              <div key={eachMeal.id}>
                <img
                  style={mealImageStyle}
                  alt="image_url"
                  src={eachMeal.image_url}
                />
                <p>{eachMeal.meals_name}</p>
                <div style={{ fontSize: '10px', fontWeight: 100 }}>
                  {this.props.selectedItems}
                </div>
                <p>{this.props.qty}</p>
                <p>Price: ${eachMeal.price}</p>

                <p>{this.props.totalPrice}</p>
              </div>
              <button
                onClick={() => {
                  this.handleCartRemove(eachMeal);
                  Swal({
                    title: 'Confirm',
                    text: 'Are you sure you want to delete this item?',
                    showCancelButton: true,
                    cancelButtonColor: 'default',
                    cancelButtonText: 'No, Keep this item.',
                    type: 'warning',
                    confirmButtonColor: '#FF0000',
                    confirmButtonText: 'Yes, please remove this item!'
                  });
                }}
              >
                <Icon name="trash alternate" color="red" />
              </button>
              <hr />
            </div>
          );
        })
      ) : (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Your Cart is empty <hr />
        </p>
      );

    return (
      <div>
        {/* <FaShoppingCart style={basketStyle} onClick={this.handleCartToggle} /> */}
        <Button
          color="black"
          size="big"
          style={{
            display: 'flex',
            textTransform: 'uppercase',
            width: '100%',
            height: '100%',
            paddingBottom: '15%',
            marginRight: '5%'
          }}
        >
          <Icon
            name="shopping basket"
            size="large"
            onClick={this.handleCartToggle}
          />
          Checkout
          <div>({`${this.state.cart.length}`})</div>
          {/* <Badge
          id="cart-badge"
          badgeContent={this.props.cartNumber}
          primary={true}
          badgeContent={this.state.cart.length}
        /> */}
        </Button>
        <Drawer
          style={{ fontSize: '18px' }}
          docked={false}
          width={320}
          zDepth={2}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar
              title="Recently Added Item(s)"
              width={90}
              style={{ backgroundColor: 'black', fontSize: '15px' }}
            />
          </MuiThemeProvider>
          <MenuItem onClick={this.handleClose} />
          <div> {displayInCart}</div>

          <div>
            <h2
              style={{
                fontWeight: 900,
                textAlign: 'center',
                fontSize: '22px',
                color: 'white',
                textShadow:
                  '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
              }}
            >
              Summary of Charges
            </h2>
            <p style={{ marginLeft: '2%', fontSize: '14px' }}>
              Total Items: {this.state.cart.length}
            </p>
            <p style={{ marginLeft: '2%', fontSize: '14px' }}>
              Order Subtotal: ${calculating.toFixed(2)}
              {/* Order Subtotal: ${Number(calculating) + Number(this.state.qtyy)} */}
            </p>
            <p style={{ marginLeft: '2%', fontSize: '14px' }}>
              Shipping & Handling: Free
            </p>

            <p
              style={{
                marginLeft: '2%',
                fontSize: '14px',
                color: 'red',
                display: 'flex'
              }}
            >
              Tax:{' '}
              <TaxesFees taxes={this.state.taxes.toFixed(2) * calculating} />
            </p>
            <hr />
            <div
              style={{
                marginLeft: '2%',
                paddingRight: '5%',
                fontSize: '16px',
                marginTop: '4%',
                display: 'flex',
                fontWeight: 900
              }}
            >
              {' '}
              Total:
              <EstimatedTotal
                style={{ marginLeft: '5%', display: 'flex' }}
                price={this.state.taxes.toFixed(2) * calculating + calculating}
              />
            </div>
          </div>
          <hr />
          {/* <button>
            <MenuItem style={checkOutButtonStyle} onClick={this.handleClose}>
              Proceed To CheckOut
            </MenuItem>
          </button> */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '3%',
              marginBottom: '5%'
            }}
          >
            <div style={{ width: '50%', marginLeft: '2%' }}>
              <Link to="/FullSizeCartView">
                <Button style={{ textTransform: 'uppercase', width: '100%' }}>
                  View Cart
                </Button>
              </Link>
            </div>
            {/* <div style={{ width: '50%', marginLeft: '5%' }}> */}
              <CheckoutWStripe
                amount={this.state.taxes.toFixed(2) * calculating + calculating}
                name="Spartan Performance Meals"
                description={'Make a Payment'}
              />
            {/* </div> */}
          </div>
        </Drawer>
      </div>
    );
  }
}
