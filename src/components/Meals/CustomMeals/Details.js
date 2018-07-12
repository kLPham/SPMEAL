import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//test
// import NumList from './NumList';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
// import ProteinOption from './ProteinOption';
import ProteinOp from './ProteinsOptions/ProteinOp';
import Quantity from '../../Quantity/Quantity';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
// import { SocialIcons } from 'react-social-icons';
import { Button, Icon } from 'semantic-ui-react';

//TESTING MAINSELECT HERE:
import MainSelect from './Select/MainSelect';

//WORKING IN PROGRESS TEST:
// import EstimatedCTotal from './EstimatedCTotal';
// import SelectTest from './Select/selectTest';

export default class Details extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      values: [],
      estimatedTotal: 2,
      cart: [],
      clicks: 0
      // quantity: 0,
      // item: []
    };

    //BIND ACTIONS HERE
    this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.handleAddedQuantity = this.handleAddedQuantity.bind(this);
  }
  //HANDLE ACTION BELOW:

  //CREATE HANDLE ACTIONS TYPE HERE:

  //POST ITEMS TO CART WHEN ADDED :)
  handleAddToCart(item) {
    axios
      .post('/api/cart', { item: item })
      .then(response =>
        this.setState({ cart: response.data, clicks: this.state.clicks + 1 })
      )
      .catch(console.log);
    alert('Your Custom meal is being added to shopping cart!');
  }

  handleAddedQuantity(quantity) {
    axios.post('/api/cart', { quantity: quantity }).then(response =>
      this.setState({
        click: this.state.click + 1 ? quantity : this.state.quantity + 1,
        quantity: this.state.quantity - 1
      })
    );
  }
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
    // console.log(this.state.cart);
    console.log(this.handleAddedQuantity);

    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
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
            {/* <EstimatedCTotal
                price={
                  Number(this.state.estimatedTotal) + Number(mealsId.price)
                }
              />
              NEED TO WORK ON THIS: */}
            <br />

            <div
              style={{
                marginLeft: '60%',
                marginTop: '2%'
              }}
            >
              <Quantity qty={this.handleAddedQuantity} />
              {/* qty={this.handleAddedQuantity(mealsId)} */}
              {/* TESTING HERE: */}
            </div>
            {/* {this.state.quantity.push(this.handleAddedQuantity(mealsId))}*/}
          </div>
          <div style={{ marginTop: '5.3%', marginRight: '6%' }}>
            {' '}
            <Button
              onClick={() => this.handleAddToCart(mealsId)}
              color="youtube"
              style={{
                fontSize: '20px'
              }}
            >
              Add To Cart
            </Button>
          </div>
          {/* ICONS BELOW: */}
          <div
            style={{
              marginLeft: '50%',
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
