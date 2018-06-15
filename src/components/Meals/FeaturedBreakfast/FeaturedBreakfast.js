import React, { Component } from 'react';
import './FeaturedBreakfast.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class FeaturedBreakfast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/featured_breakfast').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('featured Breakfast meals data just went through', response);
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(featuredBreakfast => {
      const style = {
        width: '20%',
        float: 'left',
        position: 'relative',
        textAlign: 'center',
        marginBottom: '2%',
        marginLeft: '4%'
      };
      const imageStyle = {
        height: '100%',
        width: '100%'
      };

      return (
        <div>
          <Paper zDepth={3} style={style}>
            <div key={featuredBreakfast.id}>
              <Link to={`/Meals/Details/${featuredBreakfast.meals_id}`}>
                <img
                  style={imageStyle}
                  alt="image_url"
                  src={featuredBreakfast.image_url}
                  // className="fbimg"
                />
              </Link>
              <div>
                <p>{featuredBreakfast.meals_name}</p>
                <p>{featuredBreakfast.price}</p>
              </div>
            </div>
          </Paper>
        </div>
      );
    });

    return (
      <div className="fbContent">
        {' '}
        <hr />
        {allMeals}
      </div>
    );
  }
}
