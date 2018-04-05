import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import topLandingImage from './topLandingImage.jpg';

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
    const topImageStyle = {
      height: '20%',
      width: '100%'
    };
    const smallerMessage = {
      fontSize: '16px',
      color: 'green',
      marginLeft: '9%',
      marginRight: '9%'
    };

    const buttonStyle = {
      fontSize: '18px',
      position: 'absolute',
      top: '62%',
      left: '9%',
      height: '20%',
      width: '25%',
      fontFamily: 'osward',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '15px',
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    return (
      <div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        <div>
          <img src={topLandingImage} style={topImageStyle} />
          <div className="whiteBox">
            <h2 className="banner">Work Hard. Eat Right.</h2>
            <p2 style={smallerMessage}>
              Our meals is always fresh and delivers right to your door in all
              50 states.
            </p2>

            <button className="button" style={buttonStyle}>
              <Link className="getStartBtn" to="/Meals">
                Shop Meals
              </Link>
            </button>
          </div>
        </div>

        <h2>
          It is Simple.<br /> Order, deliver, and enjoy!
        </h2>
      </div>
    );
  }
}
