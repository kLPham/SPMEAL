import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

import { Header, Segment, Button, Icon } from 'semantic-ui-react';

import Trash from 'react-icons/lib/fa/trash';

import TaxesFees from './TaxesFees/TaxesFees';
import ShippingFees from './ShippingFees/ShippingFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import CheckoutWStripe from '../CheckoutWStripe';

import MealsDetails from '../Meals/MealsDetails/MealsDetails';
import Cart from './Cart';
import Footer from '../Footer/Footer';
// import DeliveryOrPickup from './DeliveryOrPickup';

import DeliveryNPickup from './DeliveryNPickup/DeliveryNPickup';
import Quant from './Qty/Quant';

import Swal from 'sweetalert2';

export default class FullSizeCartView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      taxes: 0.087,
      shippingFee: 0.15,
      value: 1
    };

    //BIND METHODS HERE:
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleAddToCheckout = this.handleAddToCheckout.bind(this);
  }
  static contextTypes = {
    router: () => true
  };

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

  handleCartRemove(meals) {
    axios
      .delete(`/api/cart/${meals.meals_id}`)
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
    Swal({
      title: 'Item is removed from your bag!',
      type: 'warning',
      confirmButtonText: 'Confirm'
    });
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
          // console.log(eachMeal.price * this.props.qty);

          return (
            <div>
              <br />

              <div
                //meals box left side
                style={{
                  marginLeft: '1%',
                  boxSizing: 'contentBox',
                  width: '90%',
                  padding: '.5%',
                  border: '1px solid white',
                  borderRadius: '10px',
                  backgroundColor: 'white'
                }}
              >
                <div
                  key={eachMeal.id}
                  style={{
                    display: 'flex',
                    position: 'relative',
                    margin: '.20em',
                    width: '100%',
                    height: '15%',
                    flexDirection: 'row'
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      position: 'relative',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      marginTop: '1%',
                      marginLeft: '1%',
                      marginRight: '10%'
                    }}
                  >
                    <img
                      style={{
                        height: '75%',
                        width: '40%',
                        display: 'block'
                      }}
                      alt="image_url"
                      src={eachMeal.image_url}
                    />
                    <Button
                      style={{
                        width: '40%',
                        display: 'blocks',
                        marginTop: '2%'
                      }}
                      color="black"
                    >
                      Save For Later
                    </Button>
                  </div>{' '}
                  <div
                    style={{
                      height: '100%',
                      // width: '50%',
                      marginTop: '1%',
                      marginLeft: '-15%',
                      fontSize: '16px'
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: '20px' }}>
                      {eachMeal.meals_name}
                    </p>
                    <p style={{ fontSize: '12px' }}>
                      Item: #{eachMeal.order_number}
                    </p>
                    <p>Price: ${eachMeal.price}</p>
                    <p>
                      <Quant value={this.state.value} />
                    </p>
                  </div>{' '}
                  <div>
                    <button
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        fontSize: '20px'
                      }}
                      onClick={() => this.handleCartRemove(eachMeal)}
                    >
                      {/* <Icon name="trash alternate" /> */}X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          style={{
            boxSizing: 'contentBox',
            height: '30%',
            width: '90%',
            border: '1px solid white',
            backgroundColor: 'white',
            marginLeft: '1%',
            marginTop: '2%',
            borderRadius: '10px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: '20px',
              color: 'red',
              textAlign: 'center',
              marginTop: '8%'
            }}
          >
            Your cart is currently empty. <br />
          </p>
          <p style={{ textAlign: 'center', fontSize: '15px' }}>
            Continue browsing{' '}
            <a href="/Meals/FullMenu" style={{ textDecoration: 'underline' }}>
              here
            </a>
          </p>
        </div>
      );

    return (
      <div
        //mother container
        style={{
          boxSizing: 'contentBox',
          width: '100%',
          height: '50%',
          padding: '.5%',
          border: '1px solid gray',
          backgroundColor: '#f5f5f5',
          borderRadius: '10px'
        }}
      >
        <h2
          style={{
            textAlign: 'left',
            fontWeight: 900,
            fontFamily: 'Impact, Charcoal, sans-serif',
            lineHeight: '56px',
            fontSize: '39px',
            color: '#565353',
            marginTop: '10%',
            // borderRadius: '10px',
            marginLeft: '5%',
            color: 'black'
            // backgroundColor: '#f5f5f5'
            // textShadow:
            //   '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          }}
        >
          basket
          {/* <p style={{ fontSize: '15px' }}>
                ({`${this.state.cart.length} ${'Item(s)'}`})
              </p> */}
        </h2>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            borderRadius: '10px'
          }}
        >
          <div
            style={{
              overflow: 'auto',
              height: '700px',
              marginLeft: '4%',
              width: '60%',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px'
            }}
          >
            {/* //your bag box */}
            {/* test top */}

            <div
              style={{
                display: 'block',
                border: '1px solid 	white',
                marginLeft: '1%',
                fontWeight: 900,
                height: '30%',
                width: '90%',
                fontFamily: 'galano_grotesque',
                // color: '#565353',
                borderRadius: '10px',
                backgroundColor: 'white'
                // backgroundColor: '#1a1a1a'
              }}
            >
              {/* <DeliveryOrPickup /> */}
              <DeliveryNPickup cart={this.state.cart.length} />
            </div>
            <br />
            <br />

            {displayInCart}
          </div>
          {/* //RIGHT SIDE */}
          <div
            style={{
              boxSizing: 'contentBox',
              width: '30%',
              height: '30%',
              padding: '40px',
              border: '1px solid white',
              backgroundColor: 'white',
              borderRadius: '10px',
              // marginTop: '7%',
              // marginLeft: '1%',
              marginRight: '2%'
            }}
          >
            <h2
              style={{
                fontWeight: 900,
                textAlign: 'center',
                fontSize: '26px',
                color: 'white',

                textShadow:
                  '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
              }}
            >
              Order Summary
            </h2>
            <hr />
            <div
              style={{
                marginLeft: '1%',
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              Total Items:
              <div style={{ marginLeft: '55%' }}>{this.state.cart.length}</div>
            </div>
            <div
              style={{
                marginLeft: '1%',
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              Subtotal:
              <div style={{ marginLeft: '55%' }}>${calculating.toFixed(2)}</div>
            </div>
            <div
              style={{
                marginLeft: '1%',
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'row',
                color: '#0000CD'
              }}
            >
              Shipping & Handling:
              <div style={{ marginLeft: '10%' }}>
                {' '}
                <ShippingFees
                  fees={fees === 0 ? 'Free Shipping' : '$' + fees.toFixed(2)}
                />
              </div>
            </div>
            <div
              style={{
                marginLeft: '1%',
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              Taxes:
              <div style={{ marginLeft: '68%' }}>
                <TaxesFees taxes={this.state.taxes.toFixed(2) * calculating} />
              </div>
            </div>
            <div
              style={{
                marginLeft: '1%',
                display: 'flex',
                flexDirection: 'row',
                fontWeight: 900,
                fontSize: '15px'
              }}
            >
              {' '}
              Estimated Total:
              <div style={{ marginLeft: '43%' }}>
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

            <CheckoutWStripe
              amount={
                this.state.taxes.toFixed(2) * calculating +
                calculating +
                Number(fees)
              }
              name="Spartan Performance Meals"
              description={'Make a Payment'}
            />

            <br />
            <div>
              <img
                style={{ height: '10%', width: '100%', marginTop: '5%' }}
                src="http://www.haggertylawoffice.com/uploads/1/0/5/6/10566253/3555633_orig.png"
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '2%', marginTop: '5%', marginBottom: '5%' }}>
          <Button
            onClick={this.context.router.history.goBack}
            color="black"
            size="large"
            style={{
              textTransform: 'uppercase',
              fontSize: '20px'
            }}
          >
            <Icon
              name="chevron circle left"
              size="large"
              style={{ display: 'flex' }}
            />
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}
