import React, { Component } from 'react';
import './LandingPage.css';
import iphone from './iphone.jpg';
import deliver from './deliver.jpeg';
import enjoy from './enjoy.jpeg';

export default class LandingPage extends Component {
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
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        <div className="image1" />
        <div className="image2">
          <h2>
            It is Simple.<br /> Order, deliver, and enjoy!
          </h2>
        </div>
      </div>
    );
  }
}
