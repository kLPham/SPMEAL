import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './CustomMeals.css';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
import ProteinOp from './ProteinsOptions/ProteinOp';
import Cart from '../../Cart/Cart';
// import Quantity from '../../Quantity/Quantity';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { Button, Icon } from 'semantic-ui-react';
// import Badge from 'material-ui/Badge';
import MainSelect from './Select/MainSelect';

import { connect } from 'react-redux';
import {
  updateProteinSize,
  updateCarb,
  updateCarbSize,
  updateVeggies,
  updateVeggieSize
} from '../../../ducks/selectReducer';

import Swal from 'sweetalert2';

class Details extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      clicks: 0,
      show: true,
      value: 0,
      values: [],
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      qty: 0,
      item: 'Protein'
      // show: false
    };

    //BIND ACTIONS HERE
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    this.ToggleClick = this.ToggleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  //HANDLE ACTION BELOW:
  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/customizeMeal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }

  // QUANTITY BELOW:
  IncrementItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks + 1,
      // value: this.state.value + 1,
      qty: this.state.qty + 1
    });
  };

  DecreaseItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks - 1,
      // value: this.state.value - 1,
      qty: this.state.qty - 1
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  /////QUANTITY ENDS:
  ///TESTING SUBMIT BUTTON HERE ///
  handleSubmit(event) {
    alert(
      'You have Submitted:' +
        ' ' +
        'Protein Size:' +
        ' ' +
        this.props.ProteinSize +
        ', ' +
        'Carb:' +
        ' ' +
        this.props.Carb +
        ', ' +
        'Carb Size:' +
        ' ' +
        this.props.CarbSize +
        ', ' +
        'Veggies:' +
        ' ' +
        this.props.Veggies +
        ', ' +
        'Veggie Size:' +
        ' ' +
        this.props.VeggieSize
    );
    this.setState({ values: this.props });
    event.preventDefault();
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
        }
      )
    );
  }

  render() {
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      //TESTING CODES:
      const { imageUrl } = mealsId.image_url;
      const selectedItems =
        'Protein Size: ' +
        this.props.ProteinSize +
        ', ' +
        ' ' +
        'Carb:' +
        this.props.Carb +
        ', ' +
        ' ' +
        'Carb Size: ' +
        ' ' +
        this.props.CarbSize +
        ', ' +
        ' ' +
        'Vegetable Type:' +
        this.props.Veggies +
        ', ' +
        ' ' +
        'Vegetable Size:' +
        this.props.VeggieSize +
        '.';

      const totalPrice = Number(this.state.value) * Number(mealsId.price);
      const meatPrice = mealsId.price;

      ////CODES ABOVE WORKS!!

      // const addOnValues = () => {
      //   const ProteinSize = Number(this.props.ProteinSize);
      //   const eachMealPrice = Number(mealsId.price);
      //   const addOnValue = Number(this.state.addOnValue);
      //   ProteinSize[2] === '5oz [+$1.00 USD]'
      //     ? console.log(addOnValue + 1 + eachMealPrice)
      //     : eachMealPrice + addOnValue,
      //     ProteinSize[3] === '6oz [+2.00 USD]'
      //       ? console.log(addOnValue + 2 + eachMealPrice)
      //       : eachMealPrice + addOnValue,
      //     ProteinSize[4] === '7oz [+$3.00 USD]'
      //       ? console.log(addOnValue + 3 + eachMealPrice)
      //       : eachMealPrice + addOnValue,
      //     ProteinSize[5] === '8oz [+$4.00 USD]'
      //       ? console.log(addOnValue + 4 + eachMealPrice)
      //       : eachMealPrice + addOnValue,
      //     ProteinSize[6] === '9oz [+$5.00 USD]'
      //       ? console.log(addOnValue + 5 + eachMealPrice)
      //       : eachMealPrice + addOnValue;
      // };
      // addOnValues;

      /////////////////END TESTINH//
      // const cartNumber = this.state.value.length ? this.state.value.length : '';
      // const cartNumber = this.state.value + this.state.qty;

      return (
        <div>
          <hr />
          <div key={mealsId.meals_id} className="CDContainer">
            <div style={{ width: '55%' }}>
              <img
                alt="image_url"
                src={mealsId.image_url}
                style={{ height: '100%', width: '80%' }}
              />
            </div>
            <div style={{ width: '45%' }}>
              <h2 style={{ fontWeight: 900, fontSize: '40px' }}>
                {mealsId.name}
              </h2>
              <p2
                style={{
                  marginLeft: '43%',
                  fontSize: '20px',
                  fontWeight: 900,
                  color: 'black'
                }}
              >
                ${mealsId.price}
              </p2>
              <hr />
              <MainSelect />
              {/* TESTING SUBMIT BUTTON: */}
              <Button
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
                color="green"
                style={{ marginLeft: '45%' }}
              >
                Submit
              </Button>
            </div>
            <hr />
            {/* ///QUANTITY // */}
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 900,
                  color: 'grey',
                  textTransform: 'uppercase',
                  marginLeft: '27%'
                }}
              >
                Quantity:
              </h3>
              <div className="QContainer">
                <button
                  style={{
                    height: '40px',
                    width: '80px',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'grey'
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
                    height: '40px',
                    width: '80px',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'grey'
                  }}
                  onClick={this.IncrementItem}
                >
                  +
                </button>
              </div>
              <div>
                <h2>Selected Items: {selectedItems}</h2>
                <h2>Total Price: {totalPrice}</h2>
                <h2>Qty: {this.state.qty}</h2>

                {/* ///QUANTITY END/// */}

                <Button
                  color="black"
                  onClick={() => {
                    this.handleAddToCart(mealsId);
                    Swal({
                      title: 'Successfully Added To Your Cart!',
                      text: 'love',
                      imageUrl:
                        'https://t3.ftcdn.net/jpg/00/65/24/84/240_F_65248490_FA0iTB22m1K5CFmt9vgB78pGYCaUhf3n.jpg',
                      imageWidth: 200,
                      imageHeight: 200,
                      imageAlt: 'meals image',
                      animation: false,
                      type: 'success',
                      confirmButtonColor: 'green',
                      confirmButtonText: 'Continue Shopping'
                    });
                  }}
                >
                  Add To Cart
                </Button>

                <Cart
                  style={{ fontWeight: 100 }}
                  selectedItems={
                    this.state.item +
                    ':' +
                    mealsId.name +
                    '.' +
                    '  ' +
                    selectedItems
                  }
                  qty={'Qty:' + this.state.qty}
                  totalPrice={
                    'Total:' +
                    '$' +
                    Number(this.state.qty) * Number(mealsId.price)
                  }
                />
                {/* //BADGE TEST// */}
                {/* {cartNumber ? (
                  <a>
                    <Badge
                      id="cart-badge"
                      badgeContent={cartNumber}
                      // primary={true}
                      badgeContent={4}
                      color="primary"
                    />
                  </a>
                ) : (
                  <Cart />
                )} */}
                {/* //BADGE TEST ENDs// */}
              </div>
            </div>
          </div>
          <div>
            {/* ICONS BELOW: */}

            <div
              style={{
                marginLeft: '58%',
                marginTop: '3%'
              }}
            >
              <a href="https://www.facebook.com/Spartanperformancemeals/">
                <Icon name="facebook" size="big" bordered color="black">
                  {' '}
                </Icon>
              </a>
              <a href="https://www.instagram.com/spartanperformancemeals/">
                <Icon name="instagram" size="big" bordered color="black" />
              </a>
              <a href="mailto:spartan@Spartanperformancemeals">
                <Icon name="mail" size="big" bordered color="black" />
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <hr />
        <div> {displayMealDetails}</div>

        <br />
        <br />
        <Link to="/Meals/CustomizeYourMeal">
          <Button
            basic
            color="grey"
            style={{ marginBottom: '5%', marginLeft: '30%', fontSize: '20px' }}
          >
            <Icon
              name="long arrow alternate left"
              size="large"
              style={{ display: 'flex' }}
            />
            BACK TO STEP 1: CHOOSE YOUR PROTEIN
          </Button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { ProteinSize, Carb, CarbSize, Veggies, VeggieSize } = state;

  return {
    ProteinSize,
    Carb,
    CarbSize,
    Veggies,
    VeggieSize
  };
}

export default connect(
  mapStateToProps,
  {
    updateProteinSize,
    updateCarb,
    updateCarbSize,
    updateVeggies,
    updateVeggieSize
  }
)(Details);
