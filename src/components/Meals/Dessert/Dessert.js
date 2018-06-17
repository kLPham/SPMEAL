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
    const allMeals = this.state.displayMeals.map(dessert => {
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
            <div key={dessert.id}>
              <div>
                <Link to={`/Meals/Details/${dessert.meals_id}`}>
                  <img
                    style={imageStyle}
                    alt="image_url"
                    src={dessert.image_url}
                    // className="fbimg"
                  />
                  <p>${dessert.price}</p>
                </Link>
              </div>
              <div>
                <p>{dessert.description}</p>
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
