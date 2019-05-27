import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import './LandingPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import mea from './mea.jpeg';
import meal1 from './meal1.jpeg';
import meal2 from './meal2.jpeg';
import meals from './meals.jpeg';
import mel from './mel.jpeg';

export default class CarouselCover extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};

    //BIND METHODS BELOW:
  }
  //HANDLE METHODS BELOW:

  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///

  render() {
    return (
      <div>
        <StyleRoot>
          <Coverflow
            // displayQuantityOfSide={1.5}
            // width={960}
            // height={480}
            // navigation
            // infiniteScroll
            // enableHeading
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            media={{
              '@media (max-width: 1000px)': {
                // width: '960px',
                // height: '580px',
                paddingRight: '2%'
              },
              '@media (min-width: 1900px)': {
                width: '1800px',
                height: '800px'
              }
            }}
          >
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/ab_j_oatmeal-2018-12-09-23-36-49_1242x1242.png"
              //   alt="breakfast"
              data-action="https://www.google.com/"
            />

            <img
              src="   https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/over_easy_burger_with_sweet_potato-2018-12-09-23-16-17_768x768.png"
              //   alt="breakfast"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/chimichurri_chicken-2018-12-09-23-00-17_768x768.png"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/hot_chicken_with_mac_cheese-2017-01-14-03-56-33_1242x1242.png"
              //   alt="lunch"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/sweet_potato_veggie_benedict-2018-12-09-23-36-49_320x320.jpg"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/bison_quinoa_hash_tm-2017-01-12-16-25-37_1242x1242.png"
              //   alt="dinner"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/egg_brisket_tacos-2018-12-10-01-03-59_320x320.jpg"
              data-action="https://www.google.com/"
            />

            {/* {/* <img src="" data-action="http://tw.yahoo.com" /> */}
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/almond_butter_pancakes-2018-12-09-23-16-17_320x320.jpg"
              data-action="https://www.google.com/"
            />
            {/* {/* <img src="" data-action="http://tw.yahoo.com" /> */}
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/beef_sweet_potato_scramble-2018-12-09-23-16-17_320x320.jpg"
              data-action="https://www.google.com/"
            />
            <img
              src=" https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/blueberry_muffin-2018-12-10-01-03-59_320x320.jpg"
              data-action="https://www.google.com/"
            />
            <img
              src="https://d37rttg87jr6ah.cloudfront.net/static/product_photo_web/tex_mex_breakfast_wrap-2018-12-09-23-36-49_320x320.jpg"
              data-action="https://www.google.com/"
            />
          </Coverflow>
        </StyleRoot>
      </div>
    );
  }
}
