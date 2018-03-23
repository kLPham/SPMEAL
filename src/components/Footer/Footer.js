import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
        <span className="SpanRight">
          <h3>Contact Us</h3>
          <p1 className="size">1.972.984.0817</p1>
          <br />
          <br />
          <p1 className="size">921 Redbud blvd ste 200 Mckinney Tx, 75069</p1>
        </span>
      </div>
    );
  }
}
