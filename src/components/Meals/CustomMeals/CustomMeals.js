import React, { Component } from 'react';
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
    const allMeals = this.state.displayMeals.map(customMeals => {
      return (
        <div>
          {/* /// testing here */}

          <div>
            <Paper zDepth={3} style={styles}>
              <div className="overflow-content">
                <Paper zDepth={3}>
                  {/* style={style} */}
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
        <h2>CUSTOM MEALS</h2>
        <div> {allMeals} </div>
      </div>
    );
  }
}
