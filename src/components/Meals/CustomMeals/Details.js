import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
import ProteinOp from './ProteinsOptions/ProteinOp';
// import Quantity from '../../Quantity/Quantity';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { Button, Icon } from 'semantic-ui-react';
import MainSelect from './Select/MainSelect';

import { connect } from 'react-redux';
import {
  updateProteinSize,
  updateCarb,
  updateCarbSize,
  updateVeggies,
  updateVeggieSize
} from '../../../ducks/selectReducer';

class Details extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      values: [],
      estimatedTotal: 2,
      cart: [],
      clicks: 0,
      value: 0,
      show: true,
      addOnValue: 5
    };

    //BIND ACTIONS HERE
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  //HANDLE ACTION BELOW:

  //POST ITEMS TO CART WHEN ADDED :)
  handleAddToCart(item) {
    axios
      .post('/api/cart', { item: item })
      .then(response =>
        this.setState({
          cart: response.data,
          clicks: this.state.clicks + 1,
          value: this.state.value + 1
        })
      )
      .catch(console.log);
    alert('This item is added to shopping cart!');
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
  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/customizeMeal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }

  render() {
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      // const addOns = () => {
      //   var proteinPrice = this.props.ProteinSize;
      //   proteinPrice === '5oz [+$1.00 USD]'
      //     ? this.state.addOnValue + 1
      //     : proteinPrice + 0;
      // };
      const addedValue = this.state.value * mealsId.price;

      //TESTING CODES:
      // const ProteinSize = this.props.ProteinSize;
      // const eachMealPrice = mealsId.price;
      const addOnValues =
        Number(this.state.addOnValue) +
        Number(mealsId.price) * Number(this.state.value) +
        ',' +
        ' ' +
        this.props.ProteinSize;
      ////CODES ABOVE WORKS!!

      // const addOnValues = () =>
      //   this.props.ProteinSize === '5oz [+$1.00 USD]'
      //     ? Number(mealsId.price) + 1
      //     : Number(this.state.addOnValue + Number(mealsId.price));

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

      //TESTING CODE BELOW:

      /////////////////END TESTINH//

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
            </div>
            <hr />
            {/* NEED TO WORK ON THIS:  */}
            {/* ///QUANTITY TEST// */}
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
                Quantity
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
                <h2>Total Price: {addedValue}</h2>
                <h2>Select Test: {addOnValues}</h2>
                {/* <h2>Selet:{eachMealPrice}</h2> */}
                {/* ///QUANTITY END TEST/// */}
                <Button
                  onClick={() => this.handleAddToCart(mealsId)}
                  color="youtube"
                  style={{ fontSize: '20px', marginTop: '22%' }}
                  // value={addAllOfThisToCart}
                >
                  Add To Cart
                </Button>
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
          {/* <h3>Test:{calculate}</h3> */}
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
