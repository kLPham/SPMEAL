import React, { Component } from 'react';
import MealBg from './MealBg.jpeg';

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
    return (
      <div>
        {/* <img src={MealBg}>meals</img> */}
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
      </div>
    );
  }
}
