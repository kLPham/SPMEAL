import React, { Component } from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
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
    return (
      <div>
        {/* <Header /> */}
        {/* <Footer /> */}
        <div className="image1" />
        <div className="image2">
          <h2>
            It is Simple.<br /> Order, deliver, and enjoy!
          </h2>
          {/* <img src={iphone}>You Order</img>
          <img src={deliver}>We Deliver</img>
          <img src={enjoy}>Enjoy!</img> */}
        </div>
      </div>
    );
  }
}
