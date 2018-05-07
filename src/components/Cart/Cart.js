import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      cart: []
    };
  }

  //HANDLE ACTION BELOW:
  handleCartToggle = () => this.setState({ open: !this.state.open });
  handleCartClose = () => this.setState({ open: false });
  //GET ITEMS FROM DETAIL PAGE:
  componentDidMount() {
    axios.get('/api/shopping_cart').then(response => {
      this.setState({ cart: response.data });
    });
  }

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: fullWhite,
        accent1Color: deepOrangeA400
      },
      appBar: {
        height: 50
      }
    });
    const styleSize = {
      fontSize: '20px',
      fontWeight: 'bold'
    };
    const cutleryStyle = {
      height: '55px',
      width: '55px',
      alignItems: 'center',
      color: 'gray',
      paddingBottom: '6%',
      paddingTop: '2.5%',
      marginLeft: '5%'
    };
    // const cartButton = {
    //   marginRight: '120px',
    //   marginTop: '3%',
    //   backgroundColor: 'red',
    //   color: 'white',
    //   borderColor: 'black',
    //   padding: '10px',
    //   paddingLeft: '20%',
    //   fontSize: '13px',
    //   textTransform: 'uppercase',
    //   cursor: 'pointer',
    //   borderRadius: '4px',
    //   width: '120px',
    //   position: 'relative',
    //   display: 'row'
    // };
    const basketStyle = {
      height: '35px',
      width: '30px',
      position: 'relative',
      color: 'black',
      paddingRight: '100px',
      cursor: 'pointer'
    };
    const style = {
      marginBottom: '100%'
    };
    const checkOutButtonStyle = {
      width: '280px',
      height: '5%',
      backgroundColor: 'green',
      color: 'white',
      fontSize: '25px',
      marginRight: '8%'
    };
    const displayOnCart =
      this.state.cart && this.state.cart.length > 0 ? (
        this.state.cart.map(eachMeal => {
          return (
            <div>
              <div>
                <div key={eachMeal}>
                  {' '}
                  <img alt="image_url" src={eachMeal.image_url} />{' '}
                  <p>{eachMeal.meals_name}</p> <p>QTY: {eachMeal.quantity}</p>
                  <p>PRICE: ${eachMeal.price}</p>
                  <br />
                  <br />
                  <hr />
                  <button>
                    {/* <MenuItem
                  style={checkOutButtonStyle}
                  onClick={this.handleClose}
                >
                  CheckOut
                </MenuItem> */}
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p> Cart</p>
      );

    return (
      <div>
        {/* <button style={cartButton} onClick={this.handleCartToggle}> */}
        <FaShoppingCart style={basketStyle} onClick={this.handleCartToggle} />
        {/* </button> */}
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
            <AppBar title="Cart" width={50} />
          </MuiThemeProvider>
          <MenuItem style={style} onClick={this.handleClose} />
          {/* <MenuItem> <img alt="image_url" src={eachMeal.image_url} /> */}
          {/* <p>{eachMeal.meals_name}</p>
          <p>QTY: {eachMeal.quantity}</p>
          <p>PRICE: ${eachMeal.price}</p> */}
          <br />
          <br />
          <hr />
          <button>
            <MenuItem style={checkOutButtonStyle} onClick={this.handleClose}>
              Proceed To CheckOut
            </MenuItem>
          </button>
        </Drawer>
        <div> {displayOnCart}</div>
      </div>
    );
  }
}
