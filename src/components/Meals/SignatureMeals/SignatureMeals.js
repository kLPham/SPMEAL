import React, { Component } from 'react';
import './SignatureMeals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignatureMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/signature_meals').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('meals data just went through', response);
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(signatureMeals => {
      const imageStyle = {
        height: '300px',
        widdth: '300px'
      };
      const mealsStyle = {
        div: {
          display: 'flex',
          padding: 20,
          alignItems: 'center'
        },
        mealsRight: {
          flex: 4,
          paddingLeft: 10,
          width: '92%',
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
          fontSize: '20px'
        }
      };
      return (
        <div style={mealsStyle} className="mealsPosition">
          <div key={signatureMeals.id} style={mealsStyle.mealsRight}>
            {/* <Link to={`/meals/Details/${signatureMeals.id}`}> */}
            <img
              style={imageStyle}
              alt="image_url"
              src={signatureMeals.image_url}
            />
            {/* </Link> */}
            <div>
              <p>{signatureMeals.meals_name}</p>
              <p>${signatureMeals.price}</p>
            </div>
            <br />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div> {allMeals} </div>
      </div>
    );
  }
}
