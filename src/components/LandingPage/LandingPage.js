import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import topLandingImage from './topLandingImage.jpg';
import FaTablet from 'react-icons/lib/fa/tablet';
import FaTruck from 'react-icons/lib/fa/truck';

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
      fontSize: '21px',
      color: 'green',
      fontWeight: 'bold',
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
    const imageStyle = {
      height: '15%',
      width: '15%',
      marginLeft: '7%'
    };

    const iconStyle = {
      height: '170px',
      width: '150px',
      marginLeft: '10%'
    };
    const leftLetterStyle = {
      fontSize: '30px',
      textAlign: 'left'
    };
    return (
      <div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        {/* //FIRST SECTION// */}
        <div>
          <img src={topLandingImage} style={topImageStyle} />
          <div className="whiteBox">
            <h2 className="banner">Work Hard. Eat Right.</h2>
            <p2 style={smallerMessage}>
              Heat & Eat Gourmet Meals. Delivered to Your Door
            </p2>

            <button className="button" style={buttonStyle}>
              <Link className="getStartBtn" to="/Meals">
                Shop Meals
              </Link>
            </button>
          </div>
        </div>
        {/* //SECOND SECTION// */}
        <div className="secondSection">
          <h2>
            HOW IT WORKS<br />
          </h2>
          <div>
            <FaTablet style={iconStyle} />
            <h2 style={leftLetterStyle} className="order">
              Order
            </h2>
          </div>
          <div>
            <FaTruck tyle={iconStyle} />
          </div>
        </div>
      </div>
    );
  }
}
