import React, { Component } from 'react';
import mealsBgg from './mealsBgg.jpeg';
import mealsBg from './mealsBg.jpeg';

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
      left: '45%',
      height: '10%',
      width: '15%',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      padding: '12px',
      textTransform: 'uppercase',
      cursor: 'pointer'
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
          <button style={buttonStyle}>Get Started</button>
        </div>
        <div>
          <h2>From Our Kitchens To Your Table</h2>
        </div>
      </div>
    );
  }
}
