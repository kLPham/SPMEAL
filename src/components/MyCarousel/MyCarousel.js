import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import topLandingImage from './topLandingImage.jpg';
import { Link } from 'react-router-dom';

import './MyCarousel.css';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};
    //BIND METHODS BELOW:
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  //HANDLE METHODS BELOW:
  handleLinkClick(e) {
    e.preventDefault();
    console.log('click to see supplement page.');
  }
  render() {
    const buttonStyles = {
      fontSize: '25px',
      position: 'absolute',
      top: '205%',
      left: '37%',
      height: '12%',
      width: '23%',
      fontFamily: 'osward',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'pointer'
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
                  padding: '1.3%'
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
                  marginTop: '3%'
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
                  padding: '1.5%'
                }}
              >
                Delivered to Your Door.
              </p2>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/30652380_2547355045488909_9167217955094659072_o.jpg?_nc_cat=0&oh=ab6c16d3ab23e33e7d5b3918bcde3def&oe=5B8AFFE2"
            className="carouselImage"
          />
        </div>
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
