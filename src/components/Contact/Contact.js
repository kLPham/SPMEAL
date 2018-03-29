import React, { Component } from 'react';
import './contact.css';

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
    return (
      <div className="text">
        <h1 className="contact">Contact Us</h1>
        <hr />
        <h2>"I need help with..."</h2>
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

        {/* <div className="bothBoxes">
          <div className="box1">
            <span>
              <h3>Address:</h3>
              921 Redbud blvd ste 200 Mckinney Tx, 75069
            </span>
          </div>
          <br /> <br />
          <div className="box2">
            <span>
              <h3>Phone:</h3>
              972-984-0817
            </span>
          </div>
        </div> */}
      </div>
    );
  }
}
