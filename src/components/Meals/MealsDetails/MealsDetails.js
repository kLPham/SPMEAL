import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { SocialIcons } from 'react-social-icons';
import { Icon, Button } from 'semantic-ui-react';
import Cart from '../../Cart/Cart';
// import FullSizeCartView from '../../Cart/FullSizeCartView';
import Swal from 'sweetalert2';
import Qty from '../../Cart/Qty/Qty';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      clicks: 1,
      show: true,
      value: 1,
      qty: [],
      item: 'Protein',
      cart: JSON.parse(localStorage.getItem('cart')) || []
      // cart: []
    };

    //BIND ACTIONS HERE
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    this.ToggleClick = this.ToggleClick.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  static contextTypes = {
    router: () => true
  };
  //CREATE HANDLE ACTIONS TYPE HERE:

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/meal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }
  //POST ITEMS TO CART WHEN ADDED :)

  handleAddToCart(item, value) {
    axios.post('/api/cart', { item: item, value: value }).then(response =>
      this.setState(
        {
          cart: response.data,
          clicks: this.state.clicks,
          value: this.state.value
        },
        () => {
          localStorage.setItem('cart', JSON.stringify(this.state.cart));
          Swal({
            title: 'Successfully Added To Your Cart!',
            text: 'Check Out Our Other Meals',
            type: 'success',
            confirmButtonText: 'Confirm'
          });
        }
      )
    );
  }
  IncrementItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks + 1,
      value: this.state.value + 1
      // qty: this.state.qty + 1
    });
  };

  DecreaseItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks - 1,
      value: this.state.value - 1
      // qty: this.state.qty - 1
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const style = {
      position: 'relative',
      display: 'row',
      borderStyle: 'ridge',
      borderColor: 'gray',
      marginLeft: '13%',
      marginRight: '13%',
      marginTop: '2%',
      paddingTop: '5%',
      paddingBottom: '3%'
    };
    const buttonStyle = {
      backgroundColor: 'black',
      color: 'white',
      height: '50px',
      width: '100%',
      marginTop: '2%',
      fontSize: '20px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'flex'
    };
    const rightItemsStyle = {
      float: 'right',
      position: 'absolute',
      top: '10%',
      right: '7%',
      fontSize: '25px'
    };
    const imageStyle = {
      marginLeft: '5%',
      height: '50%',
      width: '50%'
    };
    const descripStyle = {
      borderStyle: 'double',
      padding: '2.5%',
      fontSize: '15px',
      width: '89%',
      textAlign: 'center'
    };
    const iconsStyle = {
      margin: '20px'
    };
    const urls = [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
      'https://www.pinterest.com/'
    ];

    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      const qtyTest = Number(this.state.value);
      return (
        <div key={mealsId.meals_id} style={style}>
          <div style={imageStyle}>
            <img alt="image_url" src={mealsId.image_url} />
            <p style={descripStyle}>{mealsId.description}</p>
          </div>
          <br />
          <div style={rightItemsStyle}>
            <p>{mealsId.meals_name}</p>
            <p>${mealsId.price}</p>
            {/* ///QUANTITY // */}
            {/* <Qty  /> */}
            <div>
              <div
                style={{
                  color: 'grey'
                }}
                className="QContainer"
              >
                Qty:
                <button
                  style={{
                    fontWeight: 900,
                    color: 'grey',
                    height: '40px'
                  }}
                  onClick={this.DecreaseItem}
                >
                  -
                </button>
                <button
                  style={{
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'grey',
                    height: '40px'
                  }}
                >
                  {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                </button>
                <button
                  style={{
                    fontWeight: 900,
                    color: 'grey',
                    height: '40px'
                  }}
                  onClick={this.IncrementItem}
                >
                  +
                </button>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                display: 'flex'
              }}
            >
              <div style={{ display: 'flex' }}>
                <button
                  style={buttonStyle}
                  onClick={() => this.handleAddToCart(mealsId)}
                >
                  Add to Cart ({`${this.state.value}`})
                </button>
              </div>
              <div style={{ display: 'flex', marginLeft: '5%' }}>
                {/* <Cart quantityValue={this.state.value} /> */}
              </div>
            </div>
            <hr />

            <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              className="icons"
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <Button
          onClick={this.context.router.history.goBack}
          basic
          color="black"
          style={{
            marginTop: '5%',
            marginLeft: '5%',
            fontSize: '20px',
            fontWeight: 900
          }}
        >
          <Icon
            name="chevron circle left"
            size="large"
            style={{ display: 'flex' }}
          />
          BACK TO MENU
        </Button>

        <div> {displayMealDetails}</div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
