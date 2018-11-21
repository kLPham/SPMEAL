import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      // clicks: 0,
      // show: true,
      // value: 0,
      values: [],
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      qty: 0,
      item: 'Protein'
      // show: false
    };

    //BIND ACTIONS HERE
    // this.IncrementItem = this.IncrementItem.bind(this);
    // this.DecreaseItem = this.DecreaseItem.bind(this);
    // this.ToggleClick = this.ToggleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  static contextTypes = {
    router: () => true
  };
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
  // IncrementItem = e => {
  //   e.preventDefault();
  //   this.setState({
  //     clicks: this.state.clicks + 1,
  //     // value: this.state.value + 1,
  //     qty: this.state.qty + 1
  //   });
  // };

  // DecreaseItem = e => {
  //   e.preventDefault();
  //   this.setState({
  //     clicks: this.state.clicks - 1,
  //     // value: this.state.value - 1,
  //     qty: this.state.qty - 1
  //   });
  // };
  // ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // };
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
    axios.post('/api/cart', { item: item }).then(response =>
      this.setState(
        {
          cart: response.data
          // value:
          //   this.state.value +
          //   this.props.ProteinSize +
          //   this.props.CarbSize +
          //   this.props.Veggies +
          //   this.props.VeggieSize
        },
        () => {
          localStorage.setItem('cart', JSON.stringify(this.state.cart));
        }
      )
    );
  }

  render() {
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
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

      // const totalPrice = Number(this.state.value) * Number(mealsId.price);
      const meatPrice = mealsId.price;
      const addedProteinSize =
        Number(this.props.ProteinSize) + Number(mealsId.price);
      const addedCarbSize = Number(this.props.CarbSize) + Number(mealsId.price);
      const addedVeggies = Number(this.props.Veggies) + Number(mealsId.price);
      const addedVeggieSize =
        Number(this.props.VeggieSize) + Number(mealsId.price);
      const customPriceTotal =
        Number(this.props.ProteinSize) +
        Number(this.props.CarbSize) +
        Number(this.props.Veggies) +
        Number(this.props.VeggieSize) +
        Number(mealsId.price);

      return (
        <div>
          <hr />
          <div key={mealsId.meals_id} className="CDContainer">
            <div style={{ width: '55%' }}>
              <img
                alt="image_url"
                src={mealsId.image_url}
                style={{ height: '100%', width: '70%' }}
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
          </div>
          {/* <hr /> */}
          {/* //OVERALL DIV */}
          <div style={{ marginLeft: '50%', marginTop: '-5%' }}>
            {/* ///QUANTITY // */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'spaceAround',
                flexWrap: 'wrap',
                marginRight: '2%'
              }}
            >
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3
                  style={{
                    fontSize: '10px',
                    fontWeight: 900,
                    color: 'grey',
                    textTransform: 'uppercase',
                    marginLeft: '10%'
                  }}
                >
                  Quantity:
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'spaceAround',
                    flexWrap: 'wrap'
                  }}
                >
                  <button
                    style={{
                      height: '40px',
                      width: '30px',
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
                      height: '40px',
                      width: '60px'
                    }}
                  >
                    {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                  </button>
                  <button
                    style={{
                      height: '40px',
                      width: '30px',
                      fontSize: '20px',
                      fontWeight: 900,
                      color: 'grey'
                    }}
                    onClick={this.IncrementItem}
                  >
                    +
                  </button>
                </div> */}
            </div>
            <Button
              style={{
                marginLeft: '4%',
                marginTop: '3.7%',
                width: '50%',
                height: '20%',
                fontSize: '20px',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
              color="black"
              onClick={() => {
                this.handleAddToCart(mealsId);
                Swal({
                  title:
                    'Custom Total:' + '' + '$' + customPriceTotal.toFixed(2),
                  text: 'Custom Order Successfully added',
                  imageUrl: mealsId.image_url,
                  imageWidth: 200,
                  imageHeight: 200,
                  imageAlt: 'meals image',
                  animation: false,
                  type: 'success',
                  confirmButtonColor: 'black',
                  confirmButtonText:
                    '<a href= /Meals/FullMenu>Continue Shopping</a>',
                  footer: '<a href= /FullSizeCartView>View Shopping bag</a>'
                });
              }}
            >
              Add To Cart
            </Button>
            <hr />
            TESting PRice total HEre:
            <br />
            Price + proPrice:{addedProteinSize}
            <br />
            Price + carbSize: {addedCarbSize}
            <br />
            Price + veggies: {addedVeggies}
            <br />
            Price + veggieSize: {addedVeggieSize}
            <br />
            STAR:{customPriceTotal.toFixed(2)}
            <div style={{ width: '10%', marginTop: '5%', height: '100%' }}>
              {/* <Cart
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
              /> */}

              <Cart />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '5%',
              marginLeft: '21%'
            }}
          />

          <hr />
          {/* ICONS BELOW: */}
          <div style={{ marginTop: '5%', marginLeft: '20%' }}>
            <h2>Connect with us</h2>
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
        // </div>
      );
    });

    return (
      <div>
        <hr />
        <div> {displayMealDetails}</div>

        <br />
        <br />

        <Button
          onClick={this.context.router.history.goBack}
          basic
          color="grey"
          style={{ marginBottom: '5%', marginLeft: '30%', fontSize: '20px' }}
        >
          <Icon
            name="chevron circle left"
            size="large"
            style={{ display: 'flex' }}
          />
          BACK TO STEP 1: CHOOSE YOUR PROTEIN
        </Button>
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
