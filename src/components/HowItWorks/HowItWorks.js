import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';
import Footer from '../Footer/Footer';
import ingredients from './ingredients.jpg';

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {};
    //BIND METHODS BELOW:
  }

  render() {
    const mealsBgStyle = {
      height: '90vh',
      width: '90%',
      marginLeft: '5%'
    };
    const tagStyle = {
      backgroundColor: 'black',
      width: '45%',
      fontSize: '19px',
      fontStyle: 'oblique',
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: '65%',
      left: '25%',
      textAlign: 'center',
      padding: '1%'
    };
    const buttonStyle = {
      fontSize: '20px',
      position: 'absolute',
      top: '80%',
      left: '42%',
      height: '10%',
      width: '15%',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '10px',
      padding: '12px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    //Section 2
    const bottomImageStyle = {
      height: '65vh',
      width: '90%',
      opacity: '1.5',
      marginLeft: '5%'
    };
    const bottomTextStyle = {
      position: 'absolute',
      top: '368%',
      left: '17%',
      textAlign: 'center',
      color: 'white',
      fontSize: '40px',
      zIndex: '1'
    };
    return (
      <div>
        {/* SECTION 1 */}
        <section>
          <img
            alt="HTW meals background"
            src="https://fortunedotcom.files.wordpress.com/2015/08/fortune-15082612.jpg"
            style={mealsBgStyle}
          />
          <h1 style={tagStyle}>
            Enjoy the convenience of great-tasting meals delivered to your door
          </h1>
          <button className="button" style={buttonStyle}>
            <Link className="getStartBtn" to="/Meals/FullMenu">
              {' '}
              Get Started
            </Link>
          </button>
        </section>
        <br />
        {/* SECTION 2 */}
        {/* PART 1 */}
        <section>
          {/* <hr /> */}
          <h2 className="howitwork">How It Works</h2>
          <h2 style={{ color: 'black', fontWeight: 'bold' }}>
            ______________________________________________
          </h2>
          <h3 className="howitworks">
            It's simple. Order, deliver, and enjoy!
          </h3>
          <div class="htwContainer">
            <div class="img">
              <img
                className="image"
                src="https://media.istockphoto.com/vectors/ordering-food-online-or-food-blogging-vector-id525430799?k=6&m=525430799&s=612x612&w=0&h=iJrMKVmciIO9MOPW2qsE7W1yocKKNjz8TxfGMy5JZjo="
              />
            </div>
            <div class="text">Order Your Meals</div>
            <div class="smallText">
              Easily order delicious meals and snacks or create custom meals
              from our fresh selection of proteins and sides.
            </div>
            <div className="allThreeButtons">
              <button className="htwButtons">See Our Weekly Menu</button>
            </div>
          </div>
          {/* PART 2 */}
          <div class="htwContainer">
            <div class="img">
              <img
                className="image"
                src="https://png.pngtree.com/element_origin_min_pic/17/09/19/0f4bfa6a68c22fc6a5b846d9a812133b.jpg"
              />
            </div>
            <div class="text">We're On Our way!</div>
            <div class="smallText">
              Orders shipped quickly and efficiently. Delivered right to your
              door or a drop-off location of your choice.
            </div>
            <div className="allThreeButtons">
              <button className="htwButtons">See Our Snacks</button>
            </div>
          </div>
          {/* PART 3 */}
          <div class="htwContainer">
            <div class="img">
              <img
                className="image"
                src="https://img.freepik.com/free-vector/man-eating-pasta_1087-14.jpg?size=338&ext=jpg"
              />
            </div>
            <div class="text">Enjoy Your Meal!</div>
            <div class="smallText">
              Just heat up your meals (microwave or oven) for a quick and
              healthy meal without the fuss. Sounds great right? So why wait?
            </div>
            <div className="allThreeButtons">
              <button className="htwButtons">Build A Custom Meal</button>
            </div>
          </div>
        </section>
        {/* SECTION 3 */}
        <div className="imageWrapper">
          <img
            alt="list of ingredients"
            src={ingredients}
            style={bottomImageStyle}
            className="darkerImg"
          />
          <h2 className="textOverImage">
            We Use Fresh and Healthy Ingredients
          </h2>
          <p className="smallTextImage">
            We source ingredients directly from independent producers and
            deliver our top quality products nationwide.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
