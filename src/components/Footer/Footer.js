import React, { Component } from 'react';
import './Footer.css';
import { SocialIcons } from 'react-social-icons';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import bottomIcon from './bottomIcon.jpg';

export default class Footer extends Component {
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
    console.log('click to my portfolio site.');
  }

  render() {
    const urls = [
      'https://www.facebook.com/Spartanperformancemeals/',
      'https://www.instagram.com/spartanperformancemeals/',
      'mailto:spartan@Spartanperformancemeals'
    ];
    const phoneStyle = {
      height: '30px',
      width: '30px'
    };
    const iconsStyle = {
      margin: '20px'
    };
    const bottomFooter = {
      height: '20px',
      width: '10%',
      alignItems: 'left',
      marginRight: '1%'
    };
    const copyRightStyle = {
      height: '20px',
      width: '100%',
      backgroundColor: 'gainsboro',
      // backgroundColor: '#222',
      // color: '#fff',
      fontFamily:
        ' galano_grotesque,Helvetica Neue,Helvetica,Arial,Sans,sans-serif',
      color: 'black',
      textAlign: 'left',
      fontSize: '11px',
      fontFamily: 'Raleway, sans-serif;',
      paddingLeft: '5%',
      paddingTop: '4%',
      paddingBottom: '2%',
      paddingRight: '5%'
    };

    return (
      <div>
        <div className="footer">
          <span className="SpanLeft">
            <h3>Join Our Email List</h3>
            <p1 className="size">
              Get VIP access to deals, discounts, and all things from Spartan.
            </p1>
            <br />
            <br />
            <div className="insideSpan">
              <input
                className="input"
                type="text"
                placeholder="email@example.com"
              />
              <button className="goButton" type="submit">
                Go
              </button>
            </div>
          </span>
          {/* SECOND SPAN */}
          <span className="SpanRight">
            <h3>Contact Us</h3>
            <p1 className="size">
              <FaPhoneSquare style={phoneStyle} />
              1.972.984.0817
            </p1>
            <br />
            <br />
            <p1 className="size">
              400 N Central Expressway Ste 102 McKinney, Texas
            </p1>
            <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              className="icons"
            />
          </span>
        </div>
        {/* <br color="red" /> */}
        {/* <hr /> */}
        <section style={copyRightStyle}>
          <div className="bottomFooter">
            <img src={bottomIcon} style={bottomFooter} />
            <p>©2018 Spartan Performance Meals, Inc. All Rights Reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Site Map</p>
            <p>Refund Policy</p>

            <p2 className="by">Website created by</p2>
            <a
              href="http://kellylinhpham.com/"
              onClick={() => this.handleLinkClick}
              className="linkStyle"
            >
              Kelly Linh Pham
            </a>
          </div>
        </section>
      </div>
    );
  }
}
