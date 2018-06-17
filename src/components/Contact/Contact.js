import React, { Component } from 'react';
import './contact.css';
import FaPhone from 'react-icons/lib/fa/phone';
import ReactPlayer from 'react-player';

import MeetUs from './MeetUs/MeetUs';
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
        {/* SECTION 1 */}
        <div className="contactSection1">
          <div className="contactTextOverImage">
            <h1 style={{ fontSize: '45px', fontWeight: 900 }}>Call Us Now!</h1>
            <p>
              SPM &copy; is here to answer any questions that you may have.{' '}
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="contactSecondPart">
          <h2 className="help" style={{ fontSize: '35px', fontWeight: 900 }}>
            "I need help with..."
          </h2>
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

        {/* SECTION 3 */}
        {/* <section>
          <h2 style={{ fontWeight: 900, fontSize: '45px' }}>
            Meet Our Team Members
          </h2>
          <MeetUs />
        </section> */}
        {/* SECTION 4 */}
        <div className="contactInfo">
          <div className="contactLeft">
            <h1 style={{ fontSize: '45px', fontWeight: 900 }}>
              {' '}
              Contact Info{' '}
            </h1>
            <p> SPM Headquarters || McKinney, TX </p>
            <p> 1.972.984.0817 </p>
            <p>400 N Central Expressway Ste 102 McKinney, Texas</p>
          </div>

          <div className="contactRight">
            <iframe
              title="google-map"
              className="map"
              width="600"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAI4P5G1OGvTUDMhSZPfPoYsmwg1D7XQGc&q=33.20071, -96.63688"
              allowfullscreen
            />
          </div>
        </div>

        {/* SECTION 4 */}
        {/* <section className="teamSection">
          <h3>Meet Our CEO</h3>
          <div className="allBio">
            <div className="ceo">
              <img src={CEO} alt="our CEO photo" style={imageStyle} />
              <p2 className="nameStyle">Christian Harrison</p2>
            </div>
            <div className="bio">
              
              <p2 className="bioo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pulvinar elementum iaculis. Quisque vel felis et ligula pharetra
                facilisis in in ipsum. Sed at sapien eget urna bibendum
                tincidunt vel eget nibh. Aenean nisi nibh, viverra eget iaculis
                ac, dictum sit amet enim. In sed nunc sed quam volutpat aliquam.
              </p2>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}
