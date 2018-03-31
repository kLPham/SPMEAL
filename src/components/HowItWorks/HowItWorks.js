import React, { Component } from 'react';
import mealsBgg from './mealsBgg.jpeg';
import mealsBg from './mealsBg.jpeg';
import './HowItWorks.css';

import plan from './plan.jpg';
import shoppingg from './shoppingg.jpeg';
import cookingg from './cookingg.jpeg';
import delivery from './delivery.jpeg';

import ingredients from './ingredients.jpg';

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const bannerStyle = {
      color: 'white',
      backgroundColor: 'red',
      textAlign: 'center',
      padding: '1.5%',
      fontWeight: 'bold',
      fontSize: '22px'
    };
    const mealsBgStyle = {
      height: '600px',
      width: '700px'
    };
    const mealsBggStyle = {
      height: '600px',
      width: '720px'
    };
    const tagStyle = {
      backgroundColor: 'black',
      width: '45%',
      fontSize: '19px',
      fontStyle: 'oblique',
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: '65%',
      left: '25%',
      textAlign: 'center',
      padding: '1%'
    };
    const buttonStyle = {
      fontSize: '20px',
      position: 'absolute',
      top: '80%',
      left: '42%',
      height: '10%',
      width: '15%',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      padding: '12px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };

    const imageStyle = {
      height: '15%',
      width: '15%',
      marginLeft: '7%'
    };
    const shopImageStyle = {
      height: '250px',
      width: '15%',
      marginLeft: '7%'
    };
    const cookImageStyle = {
      height: '200px',
      width: '20%',
      marginLeft: '7%',
      marginTop: '7%'
    };
    const bottomImageStyle = {
      marginTop: '6%',
      height: '40%',
      width: '100%',
      opacity: '1.5'
    };
    const bottomTextStyle = {
      position: 'absolute',
      top: '237%',
      left: '20%',
      textAlign: 'center',
      color: 'white',
      fontSize: '40px',
      zIndex: '1'
    };
    const textStyle = {
      position: 'absolute',
      top: '249%',
      left: '13%',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold'
    };

    return (
      <div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        <div>
          <img alt="meals background" src={mealsBgg} style={mealsBgStyle} />
          <img
            alt="second meals background"
            src={mealsBg}
            style={mealsBggStyle}
          />
          <h2 style={tagStyle}>
            Enjoy the convenience of great-tasting meals delivered to your door
          </h2>
          <button className="button" style={buttonStyle}>
            Get Started
          </button>
        </div>
        <div>
          <h2 className="secondPartBanner">From Our Kitchens To Your Table</h2>
          <p2 className="subTitle">What goes into a balance meal</p2>
          <br />

          <img src={plan} style={imageStyle} />
          <img src={shoppingg} style={shopImageStyle} />
          <img src={cookingg} style={cookImageStyle} />
          <img src={delivery} style={imageStyle} />
          <div>
            <h3 className="plan">Planning</h3>
            <p3 className="plans">
              We take care of the recipes and nutrition.
            </p3>{' '}
            <br />
            <p3 className="secondText">Relax, you deserve it!</p3>
            <br />
            <br />
          </div>
          <div>
            <h3 className="shop">Shopping</h3>
            <p3 className="shops">No more waiting in long lines at the</p3>
            <p3 className="shopping">grocery store.</p3>
          </div>
          <div>
            <h3 className="cook">Cooking</h3>
            <p3 className="cooks">Why cook when you can have </p3>
            <p3 className="cooking">world-class chefs do it for you?</p3>
          </div>
          <div>
            <h3 className="delivery">Delivery</h3>
            <p3 className="deliverys">Spend your time doing things you want</p3>
            <p3 className="deliverying">to do. We'll take care of delivery.</p3>
          </div>
        </div>
        <div>
          <img
            alt="list of ingredients"
            src={ingredients}
            style={bottomImageStyle}
          />
          <h3 style={bottomTextStyle}>We Use Fresh and Healthy Ingredients</h3>
          <p3 style={textStyle}>
            We source ingredients directly from independent producers and
            deliver our top quality products nationwide.
          </p3>
        </div>
      </div>
    );
  }
}
