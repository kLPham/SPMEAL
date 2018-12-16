import React, { Component } from 'react';
import './Dessert.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class Dessert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/dessert').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('desserts data just went through', response);
    });
  }

  render() {
    const styles = {
      width: '20%',
      float: 'left',
      position: 'relative',
      textAlign: 'center',
      marginLeft: '3.5%',
      marginRight: '1%'
    };
    const imageStyle = {
      marginTop: '5%',
      height: '100%',
      width: '100%'
    };

    const allMeals = this.state.displayMeals.map(desserts => {
      return (
        <div style={styles}>
          <div key={desserts.id}>
            <figure className="effect">
              <img
                alt="image_url"
                src={desserts.image_url}
                style={imageStyle}
                className="image"
              />
              <p>{desserts.meals_name}</p>
              <Link to={`/Meals/Details/${desserts.meals_id}`}>
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
                    {desserts.calories} Cal
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
