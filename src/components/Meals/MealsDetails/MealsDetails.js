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
// import Chart from './Chart';
// import { Doughnut } from 'react-chartjs-2';
import DonutChart from 'react-donut-chart';
import RatingHeart from './RatingHeart';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      item: '',
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      donut: ''

      // myDonutData: {}
      // cart: []
    };

    //BIND ACTIONS HERE
    this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.colorFunction = this.colorFunction.bind(this);
  }
  static contextTypes = {
    router: () => true
  };

  //CREATE HANDLE ACTIONS TYPE HERE:

  //GET EACH MEAL WITH A MATCHING ID:This method is automatically called once when the component has finished rendering.
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

  //donut Data below
  // onMouseEnter = (donut) => {
  //   this.setState({ donut: this.state.donut });
  // };
  // onMouseEnter = item => {
  //   console.log(`mousssing over: ${item.label}`);
  //   return item;
  // };

  //   onMouseEnter = {
  //     (item) => {
  //         console.log(`mousing over: ${item.label}`);
  //         return item;
  //     }
  // }
  formatValues = (values, total) => {
    `${((values / total) * 100).toFixed(2)}%`;
  };
  // colorFunction = (colors, index) => {
  //   colors[index % colors.length];
  // };

  //create a lifecyle method to run myDonutData: (this will run when the chart component loads)
  // componentWillMount() {
  //   this.goGetMyDonutData();
  // }
  // //Make api call here!
  // goGetMyDonutData() {
  //   this.setState({
  //     data: {
  //       labels: ['fats', 'proteins', 'carbs'],
  //       datasets: [
  //         {
  //           label: 'All Nutrition Facts',
  //           data: [29, 33, 18],
  //           backgroundColor: ['#4169E1', '#FF7F50', '#3CB371'],
  //           hoverBackgroundColor: ['#4169E1', '#FF7F50', '#3CB371'],
  //           options: {
  //             legend: 'right'
  //           },
  //           width: 500
  //         }
  //       ]
  //     }
  //   });
  // }

  render() {
    const iconsStyle = {
      marginLeft: '15%',
      marginTop: '5%'
    };
    const urls = [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
      'https://www.pinterest.com/'
    ];

    const smallHeader = {
      fontWeight: 900,
      display: 'flex',
      fontSize: '31px',
      lineHeight: '40px'
    };
    const recommendText = {
      fontSize: '9px',
      fontWeight: 600,
      color: '#008000'
    };
    const howToPreImgStyle = { height: '50px', width: '50px', display: 'flex' };
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      let fat = mealsId.fats;
      let protein = mealsId.proteins;
      let carb = mealsId.carbs;
      let calories = mealsId.calories;
      // let labelss = mealsId.fats + mealsId.proteins + mealsId.calories;

      return (
        <div key={mealsId.meals_id} style={{ display: 'flex' }}>
          {/* //LEft Side: */}
          <div style={{ marginLeft: '-8%', marginRight: '.5%' }}>
            <img
              style={{
                height: '60%',
                width: '30em'
              }}
              alt="image_url"
              src={mealsId.image_url}
            />
            <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              // className="icons"
            />
          </div>

          {/* //Right Side: */}
          <div
            style={{
              marginRight: '3%',
              overFlow: 'auto',
              height: '600px',
              width: '150em',
              overflow: 'hidden scroll',
              overflowWrap: 'breakWord'
            }}
          >
            <RatingHeart style={{ display: 'flex' }} />
            <p
              style={{
                fontWeight: 900,
                fontSize: '49px',
                color: '#565353',
                marginTop: '10%'
              }}
            >
              {mealsId.meals_name}
            </p>

            <p
              style={{
                fontWeight: 700,
                fontSize: '16px',
                color: '#ffc212',
                lineHeight: '20px'
              }}
            >
              {mealsId.nutrition_value}
            </p>
            <p
              style={{
                color: '#565353',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              {mealsId.description}
            </p>
            {/* <p>{fat + ' ' + ' ' + protein + ' ' + ' ' + carb}</p> */}
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
              <p style={{ marginRight: '60%', fontSize: '25px' }}>
                {mealsId.calories} calories
              </p>
              <p
                style={{
                  borderStyle: 'ridge',
                  borderWidth: '2px',
                  borderColor: 'black',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '20px'
                }}
              >
                ${mealsId.price}
              </p>
            </div>
            <hr />

            <div>
              <h2 style={smallHeader}>Ingredients</h2>
              <p style={{ fontWeight: 700, fontSize: '17px' }}>contains:</p>
              <p
                style={{
                  color: '#565353',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                {mealsId.ingredients}
              </p>
            </div>

            <div>
              <hr />
              <br />
              <h2 style={smallHeader}>Nutrition profile</h2>

              {/* <Chart chartData={this.state.chartData} /> */}
              {/* <Chart myDonutData={this.state.myDonutData} /> */}
              {/* 
              <Doughnut
                data={data}
                ref="chart"
                width={80}
                height={40}
                options={{
                  title: {
                    display: true,
                    text: 'All Nutrition Facts',
                    fontSize: 30
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              /> */}

              <DonutChart
                height={500}
                width={550}
                colors={['red', 'blue', 'yellow']}
                selectedOffset={0.07}
                formatValues={this.formatValues}
                onMouseEnter={item => {
                  console.log(`mousing over: ${item.label}`);
                  return item;
                }}
                // onClick={(item, toggled) => {
                //   if (toggled) {
                //     console.log(`selecting: ${item.label}`);
                //   } else {
                //     console.log(`unselecting: ${item.label}`);
                //   }
                //   return item;
                // }}

                colorFunction={this.colorFunction}
                data={[
                  {
                    label: 'Fats',
                    value: fat,
                    isEmpty: false,
                    className: 'innerText'
                    // innertext: fat
                  },
                  {
                    label: 'Proteins',
                    value: protein,
                    isEmpty: false,
                    className: 'innerText'
                  },
                  {
                    label: 'Carbs',
                    value: carb,
                    isEmpty: false,
                    className: 'innerText'
                  }
                ]}
              />
            </div>

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
                    <p style={recommendText}>RECOMMENDED FOR BEST FLAVOR</p>
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
                    <p style={recommendText}>BEST WHEN YOU'RE IN A HURRY</p>
                  </p>
                </center>
              </div>
            </div>
            <hr />

            <div style={{ display: 'flex' }}>
              <Button
                color="black"
                style={{ width: '100%', height: '20%', fontSize: '25px' }}
                onClick={() => {
                  this.handleAddToCart(mealsId);
                  Swal({
                    // text: 'Added to your bag.',
                    title: mealsId.meals_name,
                    imageUrl: mealsId.image_url,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'meals image',
                    text: '$' + mealsId.price,
                    animation: true,
                    type: 'success',
                    confirmButtonColor: 'black',
                    confirmButtonText:
                      '<a href= /Meals/FullMenu>Continue Shopping</a>',
                    footer:
                      '<a href= /FullSizeCartView>View Shopping bag</a>' +
                      '(' +
                      this.state.cart.length +
                      ')'
                  });
                }}
              >
                Add To Cart
              </Button>
            </div>

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
