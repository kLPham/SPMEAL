import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

//TEST IMPORT HERE:
import Test from './ProteinsOptions/Test.';
// import List from './ProteinsOptions/List';

export default class Details extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      values: [],
      selectedValue: '',
      selectedValues: []
      //   cart: [],
      // items: []
    };

    //BIND ACTIONS HERE
    // this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.handleValueChange = this.handleValueChange.bind(this);
  }
  //HANDLE ACTION BELOW:

  //CREATE HANDLE ACTIONS TYPE HERE:

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/customizeMeal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }
  //POST ITEMS TO CART WHEN ADDED :)
  handleAddToCart(item) {
    axios
      .post('/api/cart', { item: item })
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
    alert('This meal is being added to your shopping cart!');
  }
  render() {
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
              <ProteinOp />
            </div>
            {/* TESTING BELOW: */}
            <div
              style={{
                marginTop: '2%',
                marginLeft: '55%',
                height: '20vh',
                width: '30%',
                border: 'solid 2px grey'
              }}
            >
              {/* <List items={this.state.items} /> */}
              <Test />
            </div>
            <div
              style={{
                marginLeft: '60%',
                marginTop: '2%'
              }}
            >
              <Quantity />{' '}
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
