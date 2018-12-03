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

import microwave from './microwave.png';
import mitten from './mitten.png';
import '../Meals.css';

//importing the all the charts here:
// import { LineChart, PieChart, BarChart } from 'react-chartkick';
import { Doughnut } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      item: 'Protein',
      cart: JSON.parse(localStorage.getItem('cart')) || []
      // cart: []
    };

    //BIND ACTIONS HERE
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
  handleAddToCart(item) {
    axios.post('/api/cart', { item: item }).then(response =>
      this.setState(
        {
          cart: response.data
        },
        () => {
          localStorage.setItem('cart', JSON.stringify(this.state.cart));
        }
      )
    );
  }

  render() {
    const iconsStyle = {
      marginLeft: '25%',
      marginTop: '5%'
    };
    const urls = [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
      'https://www.pinterest.com/'
    ];
    //TESTINHG DATA:
    // const data = {
    //   labels: ['fat', 'proteins', 'carbs'],
    //   datasets: [
    //     {
    //       data: [46, 31, 17],
    //       backgroundColor: ['#4169E1', '#FF7F50', '#3CB371'],
    //       hoverBackgroundColor: ['#4169E1', '#FF7F50', '#3CB371']
    //     }
    //   ]
    // };
    const smallHeader = {
      fontWeight: 900,
      display: 'flex',
      fontSize: '31px',
      lineHeight: '40px'
    };
    const howToPreImgStyle = { height: '50px', width: '50px', display: 'flex' };
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      // const data = mealsId.calories;
      const data = {
        labels: ['fat', 'proteins', 'carbs'],
        datasets: [
          {
            data: [46, 31, 17],
            backgroundColor: ['#4169E1', '#FF7F50', '#3CB371'],
            hoverBackgroundColor: ['#4169E1', '#FF7F50', '#3CB371']
          }
        ]
      };
      return (
        <div key={mealsId.meals_id} style={{ display: 'flex' }}>
          {/* //LEft Side: */}
          <div style={{ marginLeft: '-5%' }}>
            <img alt="image_url" src={mealsId.image_url} />
            <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              className="icons"
            />
          </div>
          <br />
          {/* //Right Side: */}
          <div
            style={{
              marginLeft: '5%',
              overFlow: 'auto',
              height: '600px',
              width: '55%',
              overflow: 'hidden scroll',
              overflowWrap: 'breakWord'
            }}
          >
            <p style={{ fontWeight: 900, fontSize: '49px', color: '#565353' }}>
              {mealsId.meals_name}
            </p>
            <p style={{ fontWeight: 700, fontSize: '16px', color: '#ffc212' }}>
              {mealsId.nutrition_value}
            </p>
            <p style={{ color: '#565353', fontSize: '16px' }}>
              {mealsId.description}
            </p>
            <div
              style={{
                display: 'flex',
                paddingTop: '5%',
                marginRight: '5%',
                marginLeft: '5%',
                width: '100%',
                fontWeight: 700
              }}
            >
              <p style={{ marginRight: '70%' }}>{mealsId.calories} cal</p>
              <p
                style={{
                  borderStyle: 'ridge',
                  borderWidth: '1px',
                  borderColor: 'black',
                  borderRadius: '10px',
                  padding: '5px'
                }}
              >
                ${mealsId.price}
              </p>
            </div>
            <hr />
            <div>
              <h2 style={smallHeader}>Ingredients</h2>
              <p style={{ fontWeight: 700, fontSize: '17px' }}>contains:</p>
              <p>{mealsId.ingredients}</p>
            </div>
            <hr />
            <div>
              <h2 style={smallHeader}>Nutrition profile</h2>
              <div style={{ display: 'flex', width: '100%' }}>
                {/* <PieChart
                  data={[
                    ['Diary & Eggs', 20],
                    ['Produce', 30],
                    ['Grain', 5],
                    ['Sugar & Fat', 10],
                    ['Meat', 20],
                    ['Other', 15]
                  ]}
                /> */}
                <Doughnut data={data} />
                {/* <Line /> */}
                {/* <LineChart data={data} /> */}
                {/* <BarChart
                  data={[['protein', 46], ['carbs', 31], ['fat', 17]]}
                /> */}
              </div>
            </div>
            <hr />
            <div
              style={{
                width: '95%',
                marginLeft: '2%',
                borderStyle: 'double',
                borderWidth: '5px',
                borderColor: 'black',
                borderRadius: '10px',
                padding: '5%'
              }}
            >
              <h2 style={smallHeader}>How to prepare</h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10%',
                  fontSize: '17px'
                }}
              >
                <center>
                  <p style={{ fontWeight: 700, fontSize: '20px' }}>
                    <img
                      alt="image of a mitten"
                      src={mitten}
                      style={howToPreImgStyle}
                    />
                    Oven <p style={{ fontWeight: 'lighter' }}>{mealsId.oven}</p>
                    <p style={{ fontSize: '9px', fontWeight: 600 }}>
                      RECOMMENDED FOR BEST FLAVOR
                    </p>
                  </p>
                </center>
                <center>
                  <p
                    style={{
                      fontWeight: 700,
                      marginLeft: '55%',
                      fontSize: '20px'
                    }}
                  >
                    <img
                      alt="image of a microwave"
                      src={microwave}
                      style={howToPreImgStyle}
                    />
                    Microwave
                    <p style={{ fontWeight: 'lighter' }}>{mealsId.microwave}</p>
                    <p style={{ fontSize: '9px', fontWeight: 600 }}>
                      BEST WHEN YOU'RE IN A HURRY
                    </p>
                  </p>
                </center>
              </div>
            </div>
            <hr />
            <hr />
            <div style={{ display: 'flex' }}>
              <Button
                color="black"
                style={{ width: '100%', height: '20%', fontSize: '25px' }}
                onClick={() => {
                  this.handleAddToCart(mealsId);
                  Swal({
                    text: 'Successfully Added to your bag',
                    title: mealsId.meals_name,
                    imageUrl: mealsId.image_url,
                    imageWidth: 150,
                    imageHeight: 150,
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
            </div>
            <div style={{ display: 'flex', marginLeft: '5%' }} />
            <hr />
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
            marginTop: '9%',
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

        <div
          style={{
            display: 'block',
            position: 'relative',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: '5%',
            marginLeft: 'auto',
            marginRight: '0',
            width: '90%'
          }}
        >
          {' '}
          {displayMealDetails}
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
