import React, { Component } from 'react';
import './CustomMeals.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

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
      height: '20%',
      maxHeight: 400,
      overflow: 'auto',
      width: '14%',
      // flexDirection: 'row',
      position: 'relative',
      display: 'flex',
      // alignSelf: 'stretch',
      textAlign: 'center',
      flexWrap: 'wrap',
      height: '400px',
      alignContent: 'spaceBetween'
    };
    const addCustomeMealStyles = {
      height: '70%',
      maxHeight: 400,
      width: '13%',
      float: 'left',
      position: 'static',
      textAlign: 'center',
      marginTop: '2%',
      marginLeft: '2%',
      marginRight: '10%'
    };
    const imageStyle = {
      marginTop: '5%',
      height: '250px',
      width: '100%'
    };
    const buttonStyle = {
      backgroundColor: '#9ACD32',
      color: 'white',
      marginTop: '105%',
      height: '50px',
      width: '200px',
      fontSize: '20px',
      borderRadius: '25px',
      textTransform: 'uppercase'
    };
    const allMeals = this.state.displayMeals.map(customMeals => {
      return (
        <div>
          <Paper zDepth={3} style={styles}>
            <div key={customMeals.id}>
              <Link to={`/Meals/Details/${customMeals.meals_id}`}>
                <img
                  style={imageStyle}
                  alt="image_url"
                  src={customMeals.image_url}
                />
              </Link>
              <div>
                <p>{customMeals.meals_name}</p>
                <p>${customMeals.price}</p>
              </div>
              <br />
            </div>
          </Paper>
        </div>
      );
    });

    return (
      <div>
        <div className="Content">
          <Paper zDepth={3} style={addCustomeMealStyles}>
            <div className="bg">
              {' '}
              <button style={buttonStyle}>
                <FaPlusCircle />Custom order
              </button>
            </div>{' '}
          </Paper>
          <hr />
          <hr />
          {allMeals}{' '}
        </div>
      </div>
    );
  }
}
