import React, { Component } from 'react';
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
    const imageStyle = {
      marginTop: '5%',
      height: '250px',
      widdth: '250px'
    };
    const styles = {
      height: '30%',
      width: '30%',
      float: 'right',
      position: 'static',
      textAlign: 'center',
      alignItems: 'right'
    };
    const allMeals = this.state.displayMeals.map(mealsByTheLbs => {
      return (
        <div>
          <div>
            <Paper zDepth={3} style={styles}>
              <div className="overflow-content">
                <Paper zDepth={3}>
                  {/* style={style} */}
                  <div key={mealsByTheLbs.id}>
                    {/* <Link to={`/meals/Details/${signatureMeals.id}`}> */}
                    <img
                      style={imageStyle}
                      alt="image_url"
                      src={mealsByTheLbs.image_url}
                    />
                    {/* </Link> */}
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
        <h2>MEALS BY THE LBS</h2>
        <div> {allMeals} </div>
      </div>
    );
  }
}
