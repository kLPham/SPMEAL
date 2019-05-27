import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselCover from './CarouselCover';
import Button from 'muicss/lib/react/button';




export default class SectionTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleShopNowButton = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/FullMenu';
  };

  render() {
  

    return (
   
         <div className="landingFeature">Explore Our Menu
          <h2 style={{ color: 'black', fontWeight: 'bold', marginBottom: '5%' }}>
            ______________________________________________
          </h2>
          <hr />
          <div>
            <CarouselCover />
            <Button
              style={{
                color: 'white',
                backgroundColor: 'gray',
                borderRadius: '10px',
                position: 'relative',
                marginLeft: '45%'
              }}
              className="btnn"
              size="large"
              variant="raised"
              onClick={this.handleShopNowButton}
            >
              View More
            </Button>
          </div>
          </div>
  
    );
  }
}