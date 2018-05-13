import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import topLandingImage from './topLandingImage.jpg';

import './MyCarousel.css';

import RaisedButton from 'material-ui/RaisedButton';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = { open: false };
    //BIND METHODS BELOW:
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  //HANDLE METHODS BELOW:
  handleLinkClick(e) {
    e.preventDefault();
    console.log('click to see supplement page.');
  }
  handleButtonClick = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/CustomMeals';
  };
  render() {
    const buttonStyles = {
      margin: 12,
      background: 'linear-gradient(#00FF00 30%, #FF8E53 90%)',
      height: 58,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
    };
    return (
      <Carousel
        showThumbs={false}
        width="100%"
        transitionTime={900}
        interval={7000}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
      >
        <div>
          <img
            className="carouselImage"
            src="http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-547005387.jpg?itok=UEefA_30"
          />
          <div
            style={{
              color: 'white',
              marginTop: '-90vh',
              fontSize: '4em',
              display: 'flex'
            }}
          >
            <div className="left">
              <span
                style={{
                  color: 'red',
                  fontSize: '45px',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  padding: '1.3%',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                WORK HARD.EAT RIGHT.
              </span>
              <div>_____</div>
              <p2
                style={{
                  color: 'red',
                  fontSize: '20px',
                  textTransform: 'uppercase',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  padding: '1.3%',
                  marginBottom: '4%',
                  marginTop: '3%',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                Heat & Eat Gourmet Meals.
              </p2>
              <p2
                style={{
                  color: 'red',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  padding: '1.5%',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                Delivered to Your Door.
              </p2>
            </div>
          </div>
        </div>

        {/* ///SECOND PART  */}
        <div>
          <img
            src="https://static1.squarespace.com/static/59de7a244c0dbfb7c50e812a/t/5a2f230b53450aa1428fcfa9/1513038700106/"
            className="carouselImage"
          />
          <div
            style={{
              color: 'red',
              marginTop: '-90vh',
              fontSize: '4em',
              display: 'flex',
              marginLeft: '5%'
            }}
          >
            <div className="left">
              <span
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '1.3%',
                  textTransform: 'uppercase',
                  fontSize: '45px',
                  fontWeight: 'bold',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                You're In Control.
              </span>

              <p2
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  marginTop: '5%',
                  padding: '1.3%',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                Custom meals to fit any taste or diet.{' '}
              </p2>
              <p2
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  marginTop: '5%',
                  padding: '1.3%',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontStyle: 'oblique',
                  fontFamily: 'SansSerif'
                }}
              >
                Let our chef do the hard part.
              </p2>
            </div>
          </div>
          <div
            style={{
              color: 'red',
              marginTop: '-90vh',
              fontSize: '4em',
              display: 'flex',
              marginLeft: '25%',
              marginTop: '-10%'
            }}
          >
            <RaisedButton
              overlayStyle={buttonStyles}
              label="Get Started"
              onClick={this.handleButtonClick}
            />
          </div>
        </div>

        {/* ///THIRD PART */}
        <div>
          <img
            className="carouselImage"
            src="https://images.ctfassets.net/lufu0clouua1/2x2pPjpGA0iagck6OiGWIe/f754edac7d4a2aab2855d4566c0565ed/Beef_Picadillo.jpg"
          />
        </div>
        <div>
          <img
            className="carouselImage"
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/17349831_2258884694335947_7635505346216742361_o.jpg?_nc_cat=0&oh=f8cfd1fa6da599761613b444a5b83930&oe=5B574AB0"
          />
          <span
            style={{
              color: 'red',
              fontSize: '20px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              padding: '1.3%',
              position: 'absolute',
              top: '35%',
              left: '20%'
            }}
          >
            WANT A SPARTAN BODY?
          </span>
          <span
            style={{
              color: 'red',
              fontSize: '20px',
              textTransform: 'uppercase',
              backgroundColor: 'white',
              fontWeight: 'bold',
              padding: '1.3%',
              position: 'absolute',
              top: '45%',
              left: '15%'
            }}
          >
            {' '}
            <a
              href="https://www.spartanperformancesupplements.com/"
              onClick={() => this.handleLinkClick}
              className="linkStyle"
            >
              CHECK OUT OUR SUPPLEMENT LINE.
            </a>
          </span>
        </div>
      </Carousel>
    );
  }
}
