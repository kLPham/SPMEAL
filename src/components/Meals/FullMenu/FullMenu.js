import React, { Component } from 'react';
import './FullMenu.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
/// IMPORT MATERIAL-UI ///
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

export default class FullMenu extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE BELOW:
    this.state = {
      displayAllMeals: []
    };

    //BIND METHODS BELOW:
  }
  // /// REQUEST FOR DATA OF ALL MEALS ///
  componentDidMount() {
    axios.get('/api/meals').then(response => {
      this.setState({ displayAllMeals: response.data });
      console.log('all meals just went through', response);
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
    const hStyle = {
      backgroundColor: 'white',
      width: '100%',
      height: '15%'
    };

    const allMeals = this.state.displayAllMeals.map(allMeals => {
      return (
        <div>
          <Paper zDepth={4} style={styles}>
            <Paper zDepth={4}>
              <div key={allMeals.id}>
                <Link to={`/Meals/Details/${allMeals.meals_id}`}>
                  <img
                    alt="image_url"
                    src={allMeals.image_url}
                    style={imageStyle}
                  />
                </Link>
                <div>
                  <p>{allMeals.meals_name}</p>
                  <p>${allMeals.price}</p>
                </div>
                <br />
              </div>
            </Paper>
          </Paper>
        </div>
      );
    });

    return (
      <div class="Content">
        {' '}
        <hr />
        <h2 style={hStyle}>
          <hr />Full Menu
        </h2>
        {allMeals}
      </div>
    );
  }
}
