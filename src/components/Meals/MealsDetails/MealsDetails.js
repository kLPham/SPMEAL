import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { SocialIcons } from 'react-social-icons';
import { Icon, Button } from 'semantic-ui-react';
import Cart from '../../Cart/Cart';
// import FullSizeCartView from '../../Cart/FullSizeCartView';
import Swal from 'sweetalert2';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      item: 'Protein',
      cart: JSON.parse(localStorage.getItem('cart')) || []
      // cart: []
    };

    //BIND ACTIONS HERE
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  static contextTypes = {
    router: () => true
  };
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
    axios.post('/api/cart', { item: item }).then(response =>
      this.setState(
        {
          cart: response.data
        },
        () => {
          localStorage.setItem('cart', JSON.stringify(this.state.cart));
        }
      )
    );
  }

  render() {
    const style = {
      position: 'relative',
      display: 'row',
      // borderStyle: 'ridge',
      // borderColor: 'white',
      marginLeft: '8%',
      marginRight: '13%',
      marginTop: '2%',
      paddingTop: '5%',
      paddingBottom: '3%'
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
        <div key={mealsId.meals_id} style={{ display: 'flex' }}>
          {/* //LEft Side: */}
          <div>
            <img alt="image_url" src={mealsId.image_url} />
          </div>
          <br />
          {/* //Right Side: */}
          <div
            style={{
              marginLeft: '5%',
              overFlow: 'auto',
              height: '500px',
              width: '50%'
            }}
          >
            <p style={{ fontWeight: 900, fontSize: '3em', color: '#565353' }}>
              {mealsId.meals_name}
            </p>
            <p style={{ fontWeight: 700, fontSize: '16px', color: '#ffc212' }}>
              {mealsId.nutrition_value}
            </p>
            <p style={{ color: '#565353', fontSize: '16px' }}>
              {mealsId.description}
            </p>
            <p>${mealsId.price}</p>
            <div style={{ display: 'flex' }}>
              <Button
                color="black"
                onClick={() => {
                  this.handleAddToCart(mealsId);
                  Swal({
                    text: 'Successfully Added to your bag',
                    title: mealsId.meals_name,
                    imageUrl: mealsId.image_url,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'meals image',
                    animation: false,
                    type: 'success',
                    confirmButtonColor: 'black',
                    confirmButtonText:
                      '<a href= /Meals/FullMenu>Continue Shopping</a>',
                    footer: '<a href= /FullSizeCartView>View Shopping bag</a>'
                  });
                }}
              >
                Add To Cart
              </Button>
            </div>
            <div style={{ display: 'flex', marginLeft: '5%' }} />
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
        <Button
          onClick={this.context.router.history.goBack}
          basic
          color="black"
          style={{
            marginTop: '9%',
            marginLeft: '5%',
            fontSize: '20px',
            fontWeight: 900
          }}
        >
          <Icon
            name="chevron circle left"
            size="large"
            style={{ display: 'flex' }}
          />
          BACK TO MENU
        </Button>

        <div
          style={{
            display: 'block',
            position: 'relative',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: '5%',
            marginLeft: 'auto',
            marginRight: '0',
            width: '90%'
          }}
        >
          {' '}
          {displayMealDetails}
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
