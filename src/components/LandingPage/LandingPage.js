import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
// import topLandingImage from './topLandingImage.jpg';
import FaLaptop from 'react-icons/lib/fa/laptop';
import FaTruck from 'react-icons/lib/fa/truck';
import FaFire from 'react-icons/lib/fa/fire';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import pageHeader from './../Meals/pageHeader.jpg';
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

import Button from 'muicss/lib/react/button';

import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpg';
import blog4 from './blog4.jpg';

import ReactPlayer from 'react-player';

import MyCarousel from './../MyCarousel/MyCarousel';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleShopNowButton = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/FullMenu';
  };
  render() {
    const bannerStyle = {
      color: 'white',
      backgroundColor: 'red',
      textAlign: 'center',
      padding: '.8%',
      fontWeight: 'bold',
      fontSize: '22px'
      // zIndex: 3
    };
    const topImageStyle = {
      height: '20%',
      width: '100%'
    };
    const smallerMessage = {
      fontSize: '20px',
      fontFamily: 'lato',
      color: 'green',
      fontWeight: 'bold',
      marginLeft: '11.5%',
      marginRight: '5%'
    };

    const buttonStyle = {
      fontSize: '18px',
      position: 'absolute',
      top: '62%',
      left: '11.5%',
      height: '20%',
      width: '25%',
      fontFamily: 'osward',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    const imageStyle = {
      height: '15%',
      width: '15%',
      marginLeft: '7%'
    };

    const iconStyle = {
      height: '170px',
      width: '150px',
      marginLeft: '8%',
      marginRight: '5%'
    };
    const leftLetterStyle = {
      fontSize: '30px',
      textAlign: 'left'
    };
    const pageHeaderStyle = {
      height: '20%',
      width: '125%',
      opacity: '.7',
      alignItems: 'center'
    };
    const blogImageStyle = {
      height: '41%',
      width: '31%',
      paddingLeft: '1.75%',
      paddingBottom: '3%',
      paddingTop: '4%'
    };
    return (
      <div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        {/* //FIRST SECTION// */}
        <section>
          <MyCarousel />
        </section>
        {/* //SECOND SECTION// */}
        <section className="secondSection">
          <h2 className="titleName">
            How It Works<br />
          </h2>
          <div>
            <FaLaptop style={iconStyle} />
            <FaTruck style={iconStyle} className="flip" />
            <FaFire style={iconStyle} />
            <FaThumbsOUp style={iconStyle} />
          </div>
          <div className="ODHE">
            <span>Order</span>
            <span>Deliver</span>
            <span>Heat</span>
            <span>Enjoy</span>
          </div>
          <div className="odhes">
            <span className="odhe">Order meals weekly from our website </span>
            <span className="odhe">
              Prepped ships nationwide. Your order of freshly prepared meals are
              delivered weekly to your door.
            </span>
            <span className="odhe">
              Open up your meal and heat for the allotted time.
            </span>
            <span className="odhe">
              Enjoy your delicious meal at your home, office, or on the go.
            </span>
          </div>
        </section>
        <section className="container">
          <img src={pageHeader} style={pageHeaderStyle} />
          <div className="textBlock">
            <h2>CHECK OUT THIS WEEK’S MEALS</h2>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'green',
                marginLeft: '25%',
                borderRadius: '10px'
              }}
              size="large"
              variant="raised"
              onClick={this.handleShopNowButton}
            >
              Shop Now
            </Button>
          </div>
        </section>
        <section className="Testimonials">
          <h2 className="titleName">Testimonials</h2>
          <br />
          <div className="allBubbles">
            <div className="speechBubble">
              <FaQuoteLeft />
              <p2 className="odhe">
                {' '}
                The taste is much better than any other company i have ever
                used. Hands down.
              </p2>
              <p2 className="authorNameO">Coby Lewis</p2>
              <FaQuoteRight className="firstRQuote" />
            </div>
            <br />
            <br />
            <br />
            <div className="speechBubble">
              <FaQuoteLeft />
              <p2 className="odhe">
                {' '}
                They got the job done! Just started a 20 week program with my
                bikini competition coach. But I work full time and in college
                full time, with such a busy schedule they were the perfect fit
                to make my meal plan easier to stick to!.
              </p2>
              <p2 className="authorNameT">Josie Fothergill</p2>
              <br />
              <FaQuoteRight className="secondRQuote" />
            </div>
            <br />
            <br />

            <div className="speechBubble">
              <br />
              <FaQuoteLeft />
              <p2 className="odhe">
                {' '}
                Every meal I've had at this point has been great!!! Great taste
                and texture. Not your plain Jane meals. Best I've had yet.
              </p2>
              <p2 className="authorNameTh">Daniel Sullivan </p2>
              <FaQuoteRight className="thirdRQuote" />
            </div>
          </div>
        </section>
        <section className="container1">
          <img
            src="https://theulsterfry.com/wp-content/uploads/2015/11/food.jpg"
            style={{
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: 'gray'
            }}
          />
          <Button
            className="centered"
            style={{
              backgroundColor: 'orange',
              color: 'white',
              paddingBottom: '6%',
              paddingTop: '2%',
              textAlign: 'center',
              fontSize: '35px',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
            size="large"
            variant="raised"
            onClick={this.handleShopNowButton}
          >
            Get Started!
          </Button>
        </section>
        {/* <section className="blog">
          <img src={blog1} alt="customerImage1" style={blogImageStyle} />
          <img src={blog3} alt="customerImage3" style={blogImageStyle} />
          <img src={blog2} alt="customerImage2" style={blogImageStyle} />

          <img asrc={blog4} alt="customerImage4" style={blogImageStyle} />
        </section> */}

        <section className="container2">
          <ReactPlayer
            className="video"
            url="https://www.facebook.com/Spartanperformancemeals/videos/2545833955641018/"
            playing={false}
          />
          <h3 className="right">Let's </h3>
          <br />
          <h3 className="right1">Take a Walk </h3>
          <br />
          <h3 className="right2">To Our Kitchen</h3>
        </section>
      </div>
    );
  }
}
