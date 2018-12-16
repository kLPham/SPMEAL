import React, { Component } from 'react';
import './ByLB.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';

export default class ByLB extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {
      displayMeals: []
    };

    //BIND METHODS BELOW:
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/by_the_lb').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('meals data just went through', response);
    });
  }
  render() {
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

    const allMeals = this.state.displayMeals.map(mealsByTheLbs => {
      return (
        <div style={styles}>
          <div key={mealsByTheLbs.id}>
            <figure className="effect">
              <img
                alt="image_url"
                src={mealsByTheLbs.image_url}
                style={imageStyle}
                className="image"
              />
              <p>{mealsByTheLbs.meals_name}</p>
              <Link to={`/Meals/Details/${mealsByTheLbs.meals_id}`}>
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
                    {mealsByTheLbs.calories} Cal
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
