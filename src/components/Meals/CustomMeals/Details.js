import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CustomMeals.css';
import ProteinOp from './ProteinsOptions/ProteinOp';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { Button, Icon } from 'semantic-ui-react';
// import Badge from 'material-ui/Badge';
import MainSelect from './Select/MainSelect';

import { connect } from 'react-redux';
import {
  updateProteinSize,
  updateCarb,
  updateCarbSize,
  updateVeggies,
  updateVeggieSize
} from '../../../ducks/selectReducer';

import Swal from 'sweetalert2';

class Details extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      mealsToDisplay: [],
      values: [],
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      item: 'Protein'
    };

    //BIND ACTIONS HERE
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  static contextTypes = {
    router: () => true
  };
  //HANDLE ACTION BELOW:
  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/customizeMeal/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ mealsToDisplay: response.data });
        console.log(response.data);
      });
  }
  handleSubmit(event) {
    alert(
      'You have Submitted:' +
        ' ' +
        'Protein Size:' +
        ' ' +
        this.props.ProteinSize +
        ', ' +
        'Carb:' +
        ' ' +
        this.props.Carb +
        ', ' +
        'Carb Size:' +
        ' ' +
        this.props.CarbSize +
        ', ' +
        'Veggies:' +
        ' ' +
        this.props.Veggies +
        ', ' +
        'Veggie Size:' +
        ' ' +
        this.props.VeggieSize
    );
    this.setState({ values: this.props });
    event.preventDefault();
  }

  //POST ITEMS TO CART WHEN ADDED :)
  handleAddToCart(item, values) {
    axios.post('/api/cart', { item: item, values: values }).then(response =>
      this.setState(
        {
          cart: response.data,
          values: this.props
        },
        () => {
          localStorage.setItem(
            'cart',
            JSON.stringify(this.state.cart, this.props)
          );
        }
      )
    );
  }

  render() {
    const displayMealDetails = this.state.mealsToDisplay.map(mealsId => {
      const { imageUrl } = mealsId.image_url;
      const selectedItems =
        'Protein Size: ' +
        this.props.ProteinSize +
        ', ' +
        ' ' +
        'Carb:' +
        this.props.Carb +
        ', ' +
        ' ' +
        'Carb Size: ' +
        ' ' +
        this.props.CarbSize +
        ', ' +
        ' ' +
        'Vegetable Type:' +
        this.props.Veggies +
        ', ' +
        ' ' +
        'Vegetable Size:' +
        this.props.VeggieSize +
        '.';

      // const totalPrice = Number(this.state.value) * Number(mealsId.price);
      const meatPrice = mealsId.price;
      const addedProteinSize =
        Number(this.props.ProteinSize) + Number(mealsId.price);
      const addedCarbSize = Number(this.props.CarbSize) + Number(mealsId.price);
      const addedVeggies = Number(this.props.Veggies) + Number(mealsId.price);
      const addedVeggieSize =
        Number(this.props.VeggieSize) + Number(mealsId.price);
      const customPriceTotal =
        Number(this.props.ProteinSize) +
        Number(this.props.CarbSize) +
        Number(this.props.Veggies) +
        Number(this.props.VeggieSize) +
        Number(mealsId.price);

      return (
        <div>
          <hr />
          <div key={mealsId.meals_id} className="CDContainer">
            <div style={{ width: '55%' }}>
              <img
                alt="image_url"
                src={mealsId.image_url}
                style={{ height: '100%', width: '70%' }}
              />
            </div>
            <div style={{ width: '45%' }}>
              <h2 style={{ fontWeight: 900, fontSize: '40px' }}>
                {mealsId.name}
              </h2>
              <p2
                style={{
                  marginLeft: '43%',
                  fontSize: '20px',
                  fontWeight: 900,
                  color: 'black'
                }}
              >
                ${mealsId.price}
              </p2>
              <hr />
              <MainSelect />
              {/* TESTING SUBMIT BUTTON: */}
              <Button
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
                color="green"
                style={{ marginLeft: '45%' }}
              >
                Submit
              </Button>
            </div>
          </div>

          {/* //OVERALL DIV */}
          <div style={{ marginLeft: '50%', marginTop: '-5%' }}>
            <Button
              style={{
                marginLeft: '4%',
                marginTop: '3.7%',
                width: '50%',
                height: '20%',
                fontSize: '20px',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
              color="black"
              onClick={() => {
                this.handleAddToCart(mealsId);
                Swal({
                  title:
                    'Custom Total:' + '' + '$' + customPriceTotal.toFixed(2),
                  text: 'Custom Order Successfully added',
                  imageUrl: mealsId.image_url,
                  imageWidth: 200,
                  imageHeight: 200,
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
            <hr />
            TESting PRice total HEre:
            <br />
            Price + proPrice:{addedProteinSize}
            <br />
            Price + carbSize: {addedCarbSize}
            <br />
            Price + veggies: {addedVeggies}
            <br />
            Price + veggieSize: {addedVeggieSize}
            <br />
            STAR:{customPriceTotal.toFixed(2)}
            <div style={{ width: '10%', marginTop: '5%', height: '100%' }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '5%',
              marginLeft: '21%'
            }}
          />

          <hr />
          {/* ICONS BELOW: */}
          <div style={{ marginTop: '5%', marginLeft: '20%' }}>
            <h2>Connect with us</h2>
            <a href="https://www.facebook.com/Spartanperformancemeals/">
              <Icon name="facebook" size="big" bordered color="black">
                {' '}
              </Icon>
            </a>
            <a href="https://www.instagram.com/spartanperformancemeals/">
              <Icon name="instagram" size="big" bordered color="black" />
            </a>
            <a href="mailto:spartan@Spartanperformancemeals">
              <Icon name="mail" size="big" bordered color="black" />
            </a>
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
        <Button
          onClick={this.context.router.history.goBack}
          basic
          color="grey"
          style={{ marginBottom: '5%', marginLeft: '30%', fontSize: '20px' }}
        >
          <Icon
            name="chevron circle left"
            size="large"
            style={{ display: 'flex' }}
          />
          BACK TO STEP 1: CHOOSE YOUR PROTEIN
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { ProteinSize, Carb, CarbSize, Veggies, VeggieSize } = state;

  return {
    ProteinSize,
    Carb,
    CarbSize,
    Veggies,
    VeggieSize
  };
}

export default connect(
  mapStateToProps,
  {
    updateProteinSize,
    updateCarb,
    updateCarbSize,
    updateVeggies,
    updateVeggieSize
  }
)(Details);
