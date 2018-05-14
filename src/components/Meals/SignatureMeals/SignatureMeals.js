import React, { Component } from 'react';
import './SignatureMeals.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class SignatureMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/signature_meals').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('meals data just went through', response);
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(signatureMeals => {
      const style = {
        height: '15%',
        maxHeight: 350,
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

      return (
        <div>
          <div>
            <Paper zDepth={3} style={style}>
              <div>
                <Paper zDepth={3}>
                  <div key={signatureMeals.id}>
                    <Link to={`/Meals/Details/${signatureMeals.meals_id}`}>
                      <img
                        style={imageStyle}
                        alt="image_url"
                        src={signatureMeals.image_url}
                      />
                    </Link>
                    <div>
                      <p>{signatureMeals.meals_name}</p>
                      <p>${signatureMeals.price}</p>
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
          {' '}
          <hr />
          <hr />
          {allMeals}{' '}
        </div>
      </div>
    );
  }
}
