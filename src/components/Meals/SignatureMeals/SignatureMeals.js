import React, { Component } from 'react';
import './SignatureMeals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

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
      const styles = {
        width: '20%',
        float: 'left',
        position: 'relative',
        textAlign: 'center',
        marginBottom: '5%',
        marginLeft: '3.5%',
        marginRight: '1%'
      };
      const imageStyle = {
        marginTop: '5%',
        height: '100%',
        width: '100%'
      };

      return (
        <div style={styles}>
          <div key={signatureMeals.id}>
            <figure className="effect">
              <img
                alt="image_url"
                src={signatureMeals.image_url}
                style={imageStyle}
                className="image"
              />
              <p>{signatureMeals.meals_name}</p>
              <Link to={`/Meals/Details/${signatureMeals.meals_id}`}>
                {' '}
                <p style={{ fontSize: '20px' }} className="description">
                  Quick View{' '}
                  <p
                    style={{
                      color: 'white',
                      textTransform: 'lowerCase',
                      fontWeight: 400,
                      fontSize: '14px'
                    }}
                  >
                    {signatureMeals.calories} Cal
                  </p>
                </p>{' '}
              </Link>
            </figure>
          </div>
        </div>
      );
    });

    return (
      <div className="fbContent">
        {' '}
        {/* <hr /> */}
        {allMeals}
      </div>
    );
  }
}
