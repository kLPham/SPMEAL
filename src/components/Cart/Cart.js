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

    this.state = { open: false };
  }

  //HANDLE ACTION BELOW:
  handleCartToggle = () => this.setState({ open: !this.state.open });
  handleCartClose = () => this.setState({ open: false });
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
    const style = {
      marginBottom: '100%'
    };
    const checkOutButtonStyle = {
      width: '380px',
      height: '5%',
      backgroundColor: 'green',
      color: 'white',
      fontSize: '30px',
      marginRight: '8%'
    };
    return (
      <div>
        <button style={cartButton} onClick={this.handleCartToggle}>
          <FaShoppingCart style={basketStyle} />
          Cart(0)
        </button>
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
            <AppBar title="Cart" width={50}>
              <FaShoppingCart style={basketStyle} />
            </AppBar>
          </MuiThemeProvider>
          <MenuItem>meals image Here</MenuItem>
          <MenuItem style={style} onClick={this.handleClose}>
            name, quantity, price
          </MenuItem>
          <MenuItem>Subtotal: $9.00</MenuItem>
          <br />
          <br />
          <hr />
          <button>
            <MenuItem style={checkOutButtonStyle} onClick={this.handleClose}>
              CheckOut
            </MenuItem>
          </button>
        </Drawer>
      </div>
    );
  }
}
