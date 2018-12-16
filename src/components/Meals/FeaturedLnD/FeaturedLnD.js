import React, { Component } from 'react';
import './FeaturedLnD.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class FeaturedLnD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/Featuredlnd').then(response => {
      this.setState({ displayMeals: response.data });
      console.log(
        'featured Lunch & dinner meals data just went through',
        response
      );
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(featuredLnD => {
      const styles = {
        width: '20%',
        float: 'left',
        position: 'relative',
        textAlign: 'center',
        marginBottom: '5%',
        marginLeft: '4%'
      };
      const imageStyle = {
        height: '100%',
        width: '100%'
      };

      return (
        <div style={styles}>
          <div key={featuredLnD.id}>
            <figure className="effect">
              <img
                alt="image_url"
                src={featuredLnD.image_url}
                style={imageStyle}
                className="image"
              />
              <p>{featuredLnD.meals_name}</p>
              <Link to={`/Meals/Details/${featuredLnD.meals_id}`}>
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
                    {featuredLnD.calories} Cal
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
