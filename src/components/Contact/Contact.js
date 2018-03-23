import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="text">
        <h1 className="contact">Contact Us</h1>
        <hr />
        <h2>
          "If you have any questions or suggestions feel free to email us."
        </h2>
        <div className="bothBoxes">
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
        </div>
      </div>
    );
  }
}
