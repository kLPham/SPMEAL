import React, { Component } from 'react';
import './FullMenu.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
/// IMPORT MATERIAL-UI ///

export default class FullMenu extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {
      displayAllMeals: []
    };

    //BIND METHODS BELOW:
  }
  // /// REQUEST FOR DATA OF ALL MEALS from server ///
  componentDidMount() {
    axios.get('/api/meals').then(response => {
      this.setState({ displayAllMeals: response.data });
      console.log('all meals just went through', response);
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

    const allMeals = this.state.displayAllMeals.map(allMeals => {
      return (
        <div style={styles}>
          <div key={allMeals.id}>
            <figure className="effect">
              <img
                alt="image_url"
                src={allMeals.image_url}
                style={imageStyle}
                className="image"
              />
              <p>{allMeals.meals_name}</p>
              <Link to={`/Meals/Details/${allMeals.meals_id}`}>
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
                    {allMeals.calories} Cal
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
