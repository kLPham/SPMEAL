import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import { Button, Icon } from 'semantic-ui-react';

import Trash from 'react-icons/lib/fa/trash';

import TaxesFees from './TaxesFees/TaxesFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import CheckoutWStripe from '../CheckoutWStripe';

import MealsDetails from '../Meals/MealsDetails/MealsDetails';
import Cart from './Cart';
import Footer from '../Footer/Footer';

export default class FullSizeCartView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      taxes: 0.087,
      value: 0,
      qtyCount: 3
    };

    //BIND METHODS HERE:
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

  handleCartRemove(meals) {
    axios
      .delete(`/api/cart/${meals.meals_id}`)
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
    alert('This meal has been remove from your shopping cart!');
  }

  //POST ON checkout PAGE
  handleAddToCheckout(item) {
    //:)
    axios
      .post('/api/CheckoutWStripe', { item: item })
      .then(response => this.setState({ checkout: response.data }))
      .catch(console.log);
    window.location.href = 'http://localhost:3000/CheckoutWStripe';
    alert("let's go pay!");
  }

  render() {
    const calculating =
      this.state.cart.length &&
      this.state.cart.reduce((total, eachMeal) => {
        var priceTotal = eachMeal.price * eachMeal.quantity;
        total += priceTotal;
        return total;
      }, 0);

    let displayInCart =
      this.state.cart.length > 0 ? (
        this.state.cart.map(eachMeal => {
          console.log(eachMeal.price * this.props.qty);
          return (
            <div>
              <br />
              <div
                style={{
                  marginLeft: '1%',
                  boxSizing: 'contentBox',
                  width: '100%',
                  padding: '.5%',
                  border: '1px solid gray'
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
                  </div>
                  <div
                    style={{
                      height: '100%',
                      width: '50%',
                      marginTop: '1%',
                      marginLeft: '-35%',
                      fontSize: '16px'
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: '20px' }}>
                      {eachMeal.meals_name}
                    </p>
                    {/* <p>{eachMeal.description}</p> */}
                    <p style={{ fontSize: '12px' }}>
                      Item: #{eachMeal.order_number}
                    </p>
                    <div style={{ fontSize: '10px', fontWeight: 100 }}>
                      {this.props.selectedItems}
                    </div>
                    <p>Price: ${eachMeal.price}</p>
                    {/* QTY: {this.props.quantityValue} */}
                    <p>{this.props.totalPrice}</p>
                  </div>
                  <div>
                    <button
                      style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        fontSize: '20px'
                      }}
                      onClick={() => this.handleCartRemove(eachMeal)}
                    >
                      {/* <Icon name="trash alternate" /> */}
                      X
                    </button>
                  </div>
                </div>
              </div>
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
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            marginTop: '5%',
            marginBottom: '5%'
          }}
        >
          <div
            style={{
              overflow: 'auto',
              height: '700px',
              marginLeft: '2%',
              width: '70%'
            }}
          >
            <h2
              style={{
                display: 'block',
                border: '1px solid gray',
                padding: '2%',
                marginLeft: '1%',
                color: 'black',
                textShadow:
                  '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
              }}
            >
              YOUR BAG ({`${this.state.cart.length} ${'Item(s)'}`})
            </h2>
            {displayInCart}
          </div>
          <div
            style={{
              boxSizing: 'contentBox',
              width: '23%',
              height: '30%',
              padding: '40px',
              border: '1px solid white',
              backgroundColor: '#f5f5f5',
              // marginTop: '1%',
              marginLeft: '1%',
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
              Summary of Charges
            </h2>
            <hr />
            <div
              style={{ marginLeft: '1%', fontSize: '14px', display: 'flex' }}
            >
              Order Subtotal:
              <div style={{ marginLeft: '65%' }}>${calculating.toFixed(2)}</div>
            </div>
            <div style={{ marginLeft: '1%', fontSize: '14px' }}>
              Shipping & Handling:
              <div style={{ marginLeft: '87%', marginTop: '-4%' }}>Free</div>
            </div>
            <div
              style={{ marginLeft: '1%', fontSize: '14px', display: 'flex' }}
            >
              Tax:
              <div style={{ marginLeft: '81%' }}>
                <TaxesFees taxes={this.state.taxes.toFixed(2) * calculating} />
              </div>
            </div>
            <div
              style={{
                marginLeft: '1%',
                display: 'flex',
                fontWeight: 900,
                fontSize: '19px'
              }}
            >
              {' '}
              Estimated Total:
              <div style={{ marginLeft: '45%', color: 'black' }}>
                <EstimatedTotal
                  price={
                    this.state.taxes.toFixed(2) * calculating + calculating
                  }
                />
              </div>
            </div>
            <hr />
            {/* <Button
              // color="#4169e1"
              size="big"
              style={{ marginRight: '15%', width: '100%' }}
            > */}{' '}
          
            <CheckoutWStripe
              amount={this.state.taxes.toFixed(2) * calculating + calculating}
            />
            {/* </Button> */}
            <br />
            <div>
              <img
                style={{ height: '10%', width: '100%', marginTop: '5%' }}
                src="http://www.haggertylawoffice.com/uploads/1/0/5/6/10566253/3555633_orig.png"
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '2%', marginBottom: '5%' }}>
          <Button
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
