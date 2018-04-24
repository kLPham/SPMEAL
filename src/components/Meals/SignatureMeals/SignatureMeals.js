import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignatureMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  //request for a response of bridal collection from database:
  componentDidMount() {
    axios.get('/api/meals/spartan_signature_meals').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('this shows that it went through, yay', response);
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(spartanSignatureMeals => {
      console.log('Meals rendering', spartanSignatureMeals);
      return (
        <div key={spartanSignatureMeals.id}>
          <Link to={`/Meals/SignatureMeals/${spartanSignatureMeals.meal_id}`}>
            <img alt="image_url" src={spartanSignatureMeals.image_url} />
          </Link>
          <div>
            <p>{spartanSignatureMeals.meal_name}</p>
            <p>{spartanSignatureMeals.quantity}</p>
            <p>${spartanSignatureMeals.price}</p>
          </div>
          <br />
        </div>
      );
    });

    return (
      <div>
        <h3>Welcome to our Spartan Signature Meals Page</h3>
        <div> {allMeals} </div>
      </div>
    );
  }
}
