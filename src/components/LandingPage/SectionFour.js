import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'muicss/lib/react/button';




export default class SectionFour extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleShopNowButton = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/FullMenu';
  };

  render() {
    const pageHeader = {
        height: '20%',
        width: '125%',
        opacity: '.7',
        alignItems: 'center'
      };
      const bottomImageStyle = {
        height: '30%',
        width: '100%',
        opacity: '1'
      };
    return (
       <div className="secondContainerL">
            <img
              alt="list of ingredients"
              src={pageHeader}
              style={bottomImageStyle}
              className="darkerImg2"
            />
            <h2 className="textOverImage">CHECK OUT THIS WEEK’S MEALS</h2>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'green',
                borderRadius: '10px'
              }}
              className="btnn"
              size="large"
              variant="raised"
              onClick={this.handleShopNowButton}
            >
              Shop Now
            </Button>
          </div>
    
    );
  }
}