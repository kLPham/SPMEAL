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
  //HANDLE ACTION HERE:
  handleCustomMealButton = () => {
    this.setState({ open: true });
    window.location.href = 'http://localhost:3000/Meals/CustomYourMeal';
  };
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

    const addCustomeMealStyles = {
      height: '80%',
      // maxHeight: 400,
      width: '20%',
      float: 'left',
      position: 'static',
      textAlign: 'center',
      marginTop: '2%',
      marginLeft: '10%',
      marginRight: '10%',
      paddingLeft: '2%'
    };

    const buttonStyle = {
      backgroundColor: '#9ACD32',
      color: 'white',
      marginRight: '9.5%',
      marginTop: '87%',
      marginBottom: '10%',
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
      <div className="fbContent">
        {' '}
        <hr />
        {allMeals}
        <Paper zDepth={3} style={addCustomeMealStyles}>
          <div className="bg">
            <br />
            <button onClick={this.handleCustomMealButton} style={buttonStyle}>
              <FaPlusCircle />Custom order
            </button>
          </div>{' '}
        </Paper>
      </div>
    );
  }
}
