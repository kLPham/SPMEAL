import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { SocialIcons } from 'react-social-icons';

export default class CDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: []
      //   cart: [],
      //   item: []
    };

    //BIND ACTIONS HERE
    // this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  //CREATE HANDLE ACTIONS TYPE HERE:

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios.get(`/api/Dmeal/${this.props.match.params.id}`).then(response => {
      this.setState({ mealsToDisplay: response.data });
      console.log(response.data);
    });
  }
  //POST ITEMS TO CART WHEN ADDED :)
  //   handleAddToCart(item) {
  //     axios
  //       .post('/api/cart', { item: item })
  //       .then(response => this.setState({ cart: response.data }))
  //       .catch(console.log);
  //     alert('This meal is being added to your shopping cart!');
  //   }
  render() {
    // const urls = [
    //   'https://www.facebook.com/',
    //   'https://www.instagram.com/',
    //   'https://twitter.com/',
    //   'https://www.pinterest.com/'
    // ];

    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      return (
        <div>
          <p>placeholder here</p>
          <hr />
          <div key={mealsId.meals_id} className="DContainer">
            <div>
              <img
                alt="image_url"
                src={mealsId.image_url}
                style={{ height: '500px', width: '500px' }}
              />
              <p>{mealsId.description}</p>
            </div>
            <br />
            <div>
              <p style={{ fontWeight: 900, fontSize: '40px' }}>
                {mealsId.meals_name}
              </p>
              <p style={{ fontWeight: 900, fontSize: '20px', color: 'gray' }}>
                ${mealsId.price}
              </p>
              <br />
              <p style={{ fontWeight: 900, fontSize: '15px', color: 'gray' }}>
                Full size meals include: 8oz of protein and 1 cup of each side.{' '}
              </p>
              <br />
              <p style={{ fontWeight: 900, fontSize: '15px', color: 'gray' }}>
                Half size meals include: 4oz protein and .5 cups of each side.
              </p>
              {/* <button
              style={buttonStyle}
              onClick={() => this.handleAddToCart(mealsId)}
            >
              Add to Cart
            </button> */}
              <hr />
              {/* <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              className="icons"
            /> */}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <hr />
        <div> {displayMealDetails}</div>

        <br />
        <br />
        <Link to="/Meals/CustomYourMeal">
          <button
            style={{ marginBottom: '5%', marginLeft: '30%', fontSize: '20px' }}
          >
            {'<<'} BACK TO STEP 1: CHOOSE YOUR PROTEIN
          </button>
        </Link>
      </div>
    );
  }
}
