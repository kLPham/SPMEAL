import React, { Component } from 'react';

export default class StoreLocator extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  //Handle

  render() {
    return (
      <div>
        <h2
          style={{
            fontSize: '40px',
            fontWeight: 900,
            marginTop: '3%',
            marginBottom: '3%'
          }}
        >
          Store Location
        </h2>
        <hr />
        <div className="contactInfo" style={{ marginLeft: '3%' }}>
          <div className="contactLeft">
            <p> SPM Headquarters || McKinney, TX </p>
            <p> 1.972.984.0817 </p>
            <p>400 N Central Expressway Ste 102 McKinney, Texas</p>
          </div>
          <div className="contactRight" style={{ marginRight: '6%' }}>
            <iframe
              title="google-map"
              className="map"
              width="600"
              height="550"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAI4P5G1OGvTUDMhSZPfPoYsmwg1D7XQGc&q=33.20071, -96.63688"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}
