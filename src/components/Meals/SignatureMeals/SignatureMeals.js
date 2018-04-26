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
  /// REQUEST FOR DATA OF ALL MEALS ///
  componentDidMount() {
    axios.get('/api/meals/signature_meals').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('meals data just went through', response);
    });
  }

  render() {
    return (
      <div>
        {/* <Link to={`/Meals/SignatureMeals/${spartanSignatureMeals.meal_id}`}>
          <img alt="image_url" src={spartanSignatureMeals.image_url} />
        </Link> */}
        <h3>signature meal exist here</h3>
        <div>
          {this.state.displayMeals.map(displayMeals => (
            <p>{displayMeals.name}</p>
          ))}
        </div>
        {/* <div>
            <p>{spartanSignatureMeals.meal_name}</p>
            <p>{spartanSignatureMeals.quantity}</p>
            <p>${spartanSignatureMeals.price}</p>
          </div> */}
        <br />
      </div>
    );
  }
}
