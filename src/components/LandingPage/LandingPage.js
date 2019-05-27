import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
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
import FeaturedBreakfast from '../Meals/FeaturedBreakfast/FeaturedBreakfast';
import FeaturedLnD from '../Meals/FeaturedLnD/FeaturedLnD';
import SignatureMeals from '../Meals/SignatureMeals/SignatureMeals';

// import CarouselCover from './CarouselCover';
// import LpSectionTwo from './LpSectionTwo';
// import LpSectionThree from './LpSectionThree';

// import { Carousel } from 'react-responsive-carousel';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // handleShopNowButton = () => {
  //   this.setState({ open: true });
  //   window.location.href = 'http://localhost:3000/Meals/FullMenu';
  // };
  handleViewBreakfastButton = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/FeaturedBreakfast';
  };
  // handleViewLnDButton = () => {
  //   this.setState({ open: true });
  //   window.location.href = 'http://localhost:3000/Meals/FeaturedLnD';
  // };
  render() {
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
    const pageHeaderStyle = {
      height: '20%',
      width: '125%',
      opacity: '.7',
      alignItems: 'center'
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
      height: '200px',
      width: '280px'
    };
    const leftLetterStyle = {
      fontSize: '30px',
      textAlign: 'left'
    };
 
    const blogImageStyle = {
      height: '41%',
      width: '31%',
      paddingLeft: '1.75%',
      paddingBottom: '3%',
      paddingTop: '4%'
    };
    
    return (
      <div style={{backgroundColor:' #fff'}}>
   {/* SECTION 1 */}
        <section>
          <MyCarousel />
        </section>
    {/* SECTION 2*/}
        <section className="section3Container">
          <SectionTwo />
        </section>
          <br />
          <br />
    {/* SECTION3 */}
         <section><SectionThree /></section>
          {/* SECTION4 */}
       {/* <section> */}
          {/* <div className="secondContainerL">
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
          </div> */}
        {/* </section> */}
          {/* <h2
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: '25',
              marginBottom: '5%'
            }}
          >
            ______________________________________________
          </h2> */}

          {/* <FeaturedBreakfast />{' '} */}
          {/* <Button
            style={{
              color: 'white',
              backgroundColor: '#0DCE27',
              borderRadius: '6px',
              position: 'absolute',
              marginTop: '45%',
              marginLeft: '40%',
              fontSize: '25px'
            }}
            size="large"
            variant="raised"
            onClick={this.handleViewBreakfastButton}
          >
            VIEW NOW
          </Button> */}
      

        {/* SECTION 4 */}
        {/* <h2 style={{ color: 'black', fontWeight: 'bold' }}>
          ______________________________________________
        </h2> */}
        {/* <section className="section3Container">
          <div className="fb">
            <h2 className="landingFeatures">Featured Lunches & Dinners</h2>

            <Button
              style={{
                color: 'white',
                backgroundColor: '#0DCE27',
                borderRadius: '6px',
             
                fontSize: '25px'
              }}
              size="large"
              variant="raised"
              onClick={this.handleViewLnDButton}
            >
              VIEW NOW
            </Button>
          </div>
        
        </section> */}

        {/* SECTION 5 */}

        <section>
          <div className="landingFeature">
            Balanced Nutrition for Healthy Living
            {/* <h2
              style={{ color: 'black', fontWeight: 'bold', marginBottom: '5%' }}
            >
              ______________________________________________
            </h2> */}
            <img
              alt="image of a plate"
              src="https://balance.bistromd.com/Skins/Balance/Images/Balance/bg2.jpg"
              style={{ height: '90%', width: '100%' }}
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
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="Testimonials">
          <h2 className="titleName">WHAT OTHERS ARE SAYING</h2>
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

        <h2 style={{ color: 'black', fontWeight: 'bold' }}>
          ______________________________________________________________________________________________________
        </h2>
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
        <Footer />
      </div>
    );
  }
}
