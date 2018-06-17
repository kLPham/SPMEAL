import React, { Component } from 'react';
import './FullMenu.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
/// IMPORT MATERIAL-UI ///
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

//TESTING FAV ICON TOGGLE

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
                <div style={{ fontWeight: 900 }}>
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
      <div className="fbContent">
        {' '}
        <hr />
        {allMeals}
      </div>
    );
  }
}
