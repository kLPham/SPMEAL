import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import topLandingImage from './topLandingImage.jpg';
import FaLaptop from 'react-icons/lib/fa/laptop';
import FaTruck from 'react-icons/lib/fa/truck';
import FaFire from 'react-icons/lib/fa/fire';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import pageHeader from './../Meals/pageHeader.jpg';
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const bannerStyle = {
      color: 'white',
      backgroundColor: 'red',
      textAlign: 'center',
      padding: '1.5%',
      fontWeight: 'bold',
      fontSize: '22px'
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
      width: '100%',
      opacity: '0.5'
    };
    const buttonStyles = {
      fontSize: '25px',
      position: 'absolute',
      top: '190%',
      left: '37%',
      height: '12%',
      width: '23%',
      fontFamily: 'osward',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };

    return (
      <div>
        <div style={bannerStyle}>Now SHIPPING NATIONWIDE as low as $15</div>
        {/* //FIRST SECTION// */}
        <section>
          <img src={topLandingImage} style={topImageStyle} />
          <div className="whiteBox">
            <h2 className="banner">Work Hard. Eat Right.</h2>
            <p2 style={smallerMessage}>
              Heat & Eat Gourmet Meals. Delivered to Your Door.
            </p2>
            <button className="button" style={buttonStyle}>
              <Link className="getStartBtn" to="/Meals">
                Shop Meals
              </Link>
            </button>
          </div>
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
        <section>
          <img src={pageHeader} style={pageHeaderStyle} />
          <h2 className="banners">CHECK OUT THIS WEEK’S MEALS</h2>
          <button className="button" style={buttonStyles}>
            <Link className="getStartBtn" to="/Meals">
              CREATE YOUR MENU
            </Link>
          </button>
        </section>
        <section className="Testimonials">
          <h2 className="titleName">Testimonials</h2>
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
            {/* <p2 className="author">Coby Lewis</p2> */}
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
      </div>
    );
  }
}
