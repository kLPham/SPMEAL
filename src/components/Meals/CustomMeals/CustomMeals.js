import React, { Component } from 'react';
import './CustomMeals.css';
import axios from 'axios';
import Paper from 'material-ui/Paper';

export default class CustomMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/custom_meals').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('meals data just went through', response);
    });
  }
  render() {
    const styles = {
      height: '15%',
      maxHeight: 400,
      overflow: 'auto',
      width: '12%',
      float: 'right',
      position: 'static',
      textAlign: 'center',
      marginRight: '2%',
      marginBottom: '2%'
    };
    const imageStyle = {
      marginTop: '5%',
      height: '250px',
      width: '100%'
    };
    const allMeals = this.state.displayMeals.map(customMeals => {
      return (
        <div>
          <div>
            <Paper zDepth={3} style={styles}>
              <div>
                <Paper zDepth={3}>
                  <div key={customMeals.id}>
                    {/* <Link to={`/meals/Details/${signatureMeals.id}`}> */}
                    <img
                      style={imageStyle}
                      alt="image_url"
                      src={customMeals.image_url}
                    />
                    {/* </Link> */}
                    <div>
                      <p>{customMeals.meals_name}</p>
                      <p>${customMeals.price}</p>
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
        <div className="Content">
          <h2>CUSTOM MEALS</h2>
          <hr />
          {allMeals}{' '}
        </div>
      </div>
    );
  }
}
