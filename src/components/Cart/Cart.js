import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { addToCart } from '../../ducks/reducer';
import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';
// import ReactRouter from 'react-router-dom';

import { Button, Icon } from 'semantic-ui-react';
import Badge from 'material-ui/Badge';

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
import ShippingFees from './ShippingFees/ShippingFees';
import CheckoutWStripe from '../CheckoutWStripe';
import Swal from 'sweetalert2';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      cart: [],
      taxes: 0.087,
      shippingFee: 0.15,
      value: 0
    };

    //BIND METHODS HERE:
    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleAddToCheckout = this.handleAddToCheckout.bind(this);
  }
  // static contextTypes = {
  //   router: () => true
  // };

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
    axios
      .post('/api/CheckoutWStripe', { item: item })
      .then(response => this.setState({ checkout: response.data }))
      .catch(console.log);
    window.location.href = 'http://localhost:3000/CheckoutWStripe';
    Swal({
      title: 'Go To Checkout!',
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
        var priceTotal = eachMeal.price * eachMeal.quantity;
        total += priceTotal;
        return total;
      }, 0);
    const fees =
      this.state.cart.length >= 3
        ? 0
        : this.state.shippingFee.toFixed(2) * calculating;
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
        <div style={{ marginLeft: '10%' }}>
          <FaShoppingBasket
            onClick={this.handleCartToggle}
            style={{
              height: '80%',
              width: '80%',
              color: 'white',
              cursor: 'pointer'
            }}
          />
          <Badge
            animated="fade"
            primary={false}
            badgeContent={this.state.cart.length}
            style={{
              marginLeft: '42%',
              position: 'relative',
              paddingBottom: '85%',
              marginTop: '-130%'
            }}
          />
        </div>

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
            {/* <AppBar
              title="Recently Added Item(s)"
              width={90}
              style={{ backgroundColor: 'black', fontSize: '5px' }}
            /> */}
            <div
              style={{
                textAlign: 'center',
                border: '2px solid black',
                padding: '2%',
                color: 'black',
                backgroundColor: '#DCDCDC'
              }}
            >
              Recently Added Item(s)
            </div>
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
              Order Summary
            </h2>
            <p style={{ marginLeft: '2%', fontSize: '14px' }}>
              Total Item(s): {this.state.cart.length}
            </p>
            <p style={{ marginLeft: '2%', fontSize: '14px', display: 'flex' }}>
              <div style={{ marginRight: '2%' }}>Order Subtotal:</div> $
              {calculating.toFixed(2)}
            </p>
            <p style={{ marginLeft: '2%', fontSize: '14px', display: 'flex' }}>
              <div style={{ marginRight: '2%', color: '#0000CD' }}>
                Shipping & Handling:
              </div>

              <ShippingFees
                fees={fees === 0 ? 'Free Shipping' : '$' + fees.toFixed(2)}
              />
            </p>

            <p
              style={{
                marginLeft: '2%',
                fontSize: '14px',
                display: 'flex'
              }}
            >
              Tax:{' '}
              <TaxesFees taxes={this.state.taxes.toFixed(2) * calculating} />
            </p>
            <div>_______________________________</div>
            <div
              style={{
                marginLeft: '25%',

                alignItems: 'center',
                fontSize: '16px',
                marginTop: '4%',
                display: 'flex',
                flexDirection: 'row',
                fontWeight: 900,
                fontSize: '15px'
              }}
            >
              {' '}
              Order total:
              <EstimatedTotal
                price={
                  this.state.taxes.toFixed(2) * calculating +
                  calculating +
                  Number(fees)
                }
              />
            </div>
          </div>
          <hr />

          <div
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '2%',
              marginBottom: '5%',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div style={{ width: '60%', display: 'flex' }}>
              <Link to="/Meals/FullMenu">
                <Button
                  color="green"
                  style={{
                    fontSize: '13px',
                    display: 'flex'
                  }}
                >
                  <Icon
                    name="angle double left"
                    size="large"
                    style={{
                      display: 'flex',
                      paddingTop: '6%'
                    }}
                  />
                  Continue Shopping
                </Button>
              </Link>
            </div>
            <div style={{ width: '40%', marginRight: '1%' }}>
              <Link to="/FullSizeCartView">
                <Button color="gray" style={{ fontSize: '14.5px' }}>
                  View Cart{' '}
                  {/* <Icon name="shopping basket" size="small" /> View Cart */}
                </Button>
              </Link>
            </div>

            {/* <CheckoutWStripe
              amount={this.state.taxes.toFixed(2) * calculating + calculating}
              name="Spartan Performance Meals"
              description={'Make a Payment'}
            /> */}
          </div>
        </Drawer>
      </div>
    );
  }
}
