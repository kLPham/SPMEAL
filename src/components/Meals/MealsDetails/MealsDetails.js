import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { SocialIcons } from 'react-social-icons';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      cart: [],
      item: []
    };

    //BIND ACTIONS HERE
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  //CREATE HANDLE ACTIONS TYPE HERE:

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/meal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }
  //POST ITEMS TO CART WHEN ADDED :)
  handleAddToCart(item) {
    axios
      .post('/api/cart', { item: item })
      .then(response => this.setState({ cart: response.data }))
      .catch(console.log);
    alert('This meal is being added to your shopping cart!');
  }
  render() {
    const style = {
      position: 'relative',
      display: 'row',
      borderStyle: 'ridge',
      borderColor: 'gray',
      marginLeft: '13%',
      marginRight: '13%',
      marginTop: '2%',
      paddingTop: '5%',
      paddingBottom: '3%'
    };
    const buttonStyle = {
      backgroundColor: 'black',
      color: 'white',
      height: '50px',
      width: '100%',
      marginTop: '2%',
      fontSize: '20px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };
    const rightItemsStyle = {
      float: 'right',
      position: 'absolute',
      top: '10%',
      right: '7%',
      fontSize: '25px'
    };
    const imageStyle = {
      marginLeft: '5%',
      height: '50%',
      width: '50%'
    };
    const descripStyle = {
      borderStyle: 'double',
      padding: '2.5%',
      fontSize: '15px',
      width: '89%',
      textAlign: 'center'
    };
    const iconsStyle = {
      margin: '20px'
    };
    const urls = [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://twitter.com/',
      'https://www.pinterest.com/'
    ];

    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      return (
        <div key={mealsId.meals_id} style={style}>
          <div style={imageStyle}>
            <img alt="image_url" src={mealsId.image_url} />
            <p style={descripStyle}>{mealsId.description}</p>
          </div>
          <br />
          <div style={rightItemsStyle}>
            <p>{mealsId.meals_name}</p>
            <p>${mealsId.price}</p>
            <form>
              <Select name="Quantity" label="QTY" defaultValue="1">
                <Option value="1" label="1" />
                <Option value="2" label="2" />
                <Option value="3" label="3" />
                <Option value="4" label="4" />
                <Option value="5" label="5" />
              </Select>
            </form>
            {/* {mealsId.quantity} */}

            <button
              style={buttonStyle}
              onClick={() => this.handleAddToCart(mealsId)}
            >
              Add to Cart
            </button>
            <hr />
            <SocialIcons
              urls={urls}
              style={iconsStyle}
              color="black"
              className="icons"
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <Link to="/Meals/FullMenu">
          <h2>{'<<'} Back To Menu</h2>
        </Link>
        <div> {displayMealDetails}</div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
