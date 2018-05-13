import React, { Component } from 'react';
import './contact.css';
import FaPhone from 'react-icons/lib/fa/phone';
import ReactPlayer from 'react-player';

import CEO from './CEO.jpg';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const buttonStyle = {
      border: '3px solid red',
      textTransform: 'uppercase',
      fontSize: '15px',
      color: 'black',
      textAlign: 'center',
      padding: '20px',
      cursor: 'pointer',
      boxShadow: '0 3px 10px -3px rgba(0, 0, 0, 0.25)',
      marginBottom: '50px',
      marginRight: '15px'
    };
    const imageStyle = {
      height: '500px',
      width: '400px',
      paddingLeft: '47%',
      paddingBottom: '5%'
    };
    return (
      <div className="text">
        <h1 className="contact">
          <FaPhone /> Contact Us
        </h1>
        <hr />
        <div className="contactSecondPart">
          <h2 className="help">"I need help with..."</h2>
          <button className="hover" style={buttonStyle}>
            Free Consultation
          </button>
          <button className="hover" style={buttonStyle}>
            Custom Meals
          </button>
          <button className="hover" style={buttonStyle}>
            Food By The LB
          </button>
          <button className="hover" style={buttonStyle}>
            Shipping Orders
          </button>
          <button className="hover" style={buttonStyle}>
            PickUp Orders
          </button>
          <button className="hover" style={buttonStyle}>
            Payments
          </button>
        </div>
        <section className="teamSection">
          <h3>Meet Our CEO</h3>
          <div className="allBio">
            <div className="ceo">
              <img src={CEO} alt="our CEO photo" style={imageStyle} />
              <p2 className="nameStyle">Christian Harrison</p2>
            </div>
            <div className="bio">
              {/* <h5>Bio</h5> */}
              <p2 className="bioo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pulvinar elementum iaculis. Quisque vel felis et ligula pharetra
                facilisis in in ipsum. Sed at sapien eget urna bibendum
                tincidunt vel eget nibh. Aenean nisi nibh, viverra eget iaculis
                ac, dictum sit amet enim. In sed nunc sed quam volutpat aliquam.
              </p2>
            </div>
          </div>
        </section>

        {/* <div className="contactV">
          <ReactPlayer
            height="360px"
            url="https://www.facebook.com/212degreescoach/videos/10156243298294878/"
            playing={false}
          />
        </div> */}
      </div>
    );
  }
}
