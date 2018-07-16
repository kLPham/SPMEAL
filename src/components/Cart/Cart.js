import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { addToCart } from '../../ducks/reducer';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import { Button, Icon } from 'semantic-ui-react';

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

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      cart: [],
      // clicks: 1,
      // value: 1,
      // show: true,
      taxes: 0.087
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
  // QUANTITY BELOW:
  IncrementItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks + 1,
      value: this.state.value + 1
    });
  };

  DecreaseItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks - 1,
      value: this.state.value - 1
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  /////QUANTITY ENDS:
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
        var priceTotal = eachMeal.price * eachMeal.quantity;
        total += priceTotal;
        return total;
      }, 0);

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
                {/* <p>QTY:{eachMeal.quantity}</p> */}
                {/* <div>
                  <div className="QContainer">
                    QTY:
                    <button
                      style={{
                        color: 'grey',
                        height: '90%',
                        width: '10%'
                      }}
                      onClick={this.DecreaseItem}
                    >
                      -
                    </button>
                    <button
                      style={{
                        color: 'grey',
                        height: '5%',
                        width: '20%'
                      }}
                    >
                      {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                    </button>
                    <button
                      style={{
                        color: 'grey',
                        height: '90%',
                        width: '10%'
                      }}
                      onClick={this.IncrementItem}
                    >
                      +
                    </button>
                  </div>
                </div> */}
                <p>Price: ${eachMeal.price}</p>
              </div>
              <button
                style={removeButton}
                onClick={() => this.handleCartRemove(eachMeal)}
              >
                <Icon name="trash alternate" />
                Remove
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
              width={90}
              style={{ backgroundColor: 'black' }}
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
              Order Subtotal: ${calculating.toFixed(2)}
            </p>
            <p style={{ marginLeft: '2%', fontSize: '14px' }}>
              Shipping & Handling: Free
            </p>
            <TaxesFees taxes={this.state.taxes.toFixed(2) * calculating} />
            <hr />
            <EstimatedTotal
              price={this.state.taxes.toFixed(2) * calculating + calculating}
            />
          </div>
          <br />
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
