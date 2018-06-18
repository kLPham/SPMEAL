import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
// import ProteinOption from './ProteinOption';
import ProteinOp from './ProteinsOptions/ProteinOp';
import Quantity from '../../Quantity/Quantity';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
// import { SocialIcons } from 'react-social-icons';
import { Button } from 'semantic-ui-react';

export default class CDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      values: []
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
    //TESTING DROP DOWN

    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      return (
        <div>
          <hr />
          <div key={mealsId.meals_id} className="CDContainer">
            <div style={{ width: '55%' }}>
              <img
                alt="image_url"
                src={mealsId.image_url}
                style={{ height: '100%', width: '80%' }}
              />
              {/* <p>{mealsId.description}</p> */}
            </div>
            <div style={{ width: '45%' }}>
              <h2 style={{ fontWeight: 900, fontSize: '45px' }}>Custom Meal</h2>
              <hr />
              <ProteinOp />
            </div>

            <hr />

            <div
              style={{
                marginLeft: '60%',
                marginTop: '5%'
                // display: 'flex',
                // flexDirection: 'row'
              }}
            >
              <Quantity />{' '}
            </div>
            <div style={{ marginTop: '8%', marginRight: '9%' }}>
              {' '}
              <Button
                color="youtube"
                style={{
                  fontSize: '20px'
                }}
              >
                Add To Cart
              </Button>
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
        <Link to="/Meals/CustomizeYourMeal">
          <Button
            basic
            color="grey"
            style={{ marginBottom: '5%', marginLeft: '30%', fontSize: '20px' }}
          >
            {'<<'} BACK TO STEP 1: CHOOSE YOUR PROTEIN
          </Button>
        </Link>
      </div>
    );
  }
}
{
  /* <button
              style={buttonStyle}
              onClick={() => this.handleAddToCart(mealsId)}
            >
              Add to Cart
            </button> */
}
// <hr />
{
  /* <SocialIcons
            urls={urls}
            style={iconsStyle}
            color="black"
            className="icons"
          /> */
}
