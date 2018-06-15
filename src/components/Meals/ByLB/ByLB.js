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
    const style = {
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
        <div>
          <div>
            <Paper zDepth={3} style={style}>
              <div>
                <Paper zDepth={3}>
                  <div key={mealsByTheLbs.id}>
                    <Link to={`/Meals/Details/${mealsByTheLbs.meals_id}`}>
                      <img
                        style={imageStyle}
                        alt="image_url"
                        src={mealsByTheLbs.image_url}
                      />
                    </Link>
                    <div>
                      <p>{mealsByTheLbs.meals_name}</p>
                      <p>${mealsByTheLbs.price}</p>
                    </div>
                    <br />
                  </div>
                </Paper>
              </div>
            </Paper>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="fbContent">
          <hr />
          <hr />
          {allMeals}{' '}
        </div>
      </div>
    );
  }
}
