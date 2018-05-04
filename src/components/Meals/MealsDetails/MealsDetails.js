import React, { Component } from 'react';
import axios from 'axios';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      displayMealsDetails: [],
      cart: []
    };

    //BIND ACTIONS HERE
  }
  //CREATE ACTION TYPE HERE

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/meals/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ displayMealsDetails: response.data });
        console.log('meals details responded', response);
      });
  }
  render() {
    const displayMealsWithMatchingId = this.state.displayMealsDetails.map(
      mealsId => {
        return (
          <div>
            <div key={mealsId.meals_id}>
              <img alt="image_url" src={mealsId.image_url} />
              <hr />
              <div>
                <p>{mealsId.meals_name}</p>
                <p>{mealsId.quantity}</p>
                <p>{mealsId.description}</p>
                <p>${mealsId.price}</p>
              </div>
            </div>
          </div>
        );
      }
    );

    return (
      <div>
        <h2>MEALS</h2>
        {displayMealsWithMatchingId}
      </div>
    );
  }
}
