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
      const imageStyle = {
        marginTop: '5%',
        height: '250px',
        widdth: '250px'
      };
      const bothStyles = {
        div: {
          display: 'inline-block',
          // flexDirection: 'row wrap',
          // padding: 20,
          width: '100%',
          marginLeft: '1%'
        },
        paperRight: {
          height: 600,
          flex: 4,
          paddingLeft: 10,
          width: '92%',
          textAlign: 'center'
        }
      };
      const style = {
        height: 350,
        width: 350,
        margin: 15,
        textAlign: 'center',
        display: 'inline-block',
        overflowY: 'auto'
      };
      return (
        <div className="mealsPosition">
          {/* /// testing here */}
          <div className="overflow-container">
            <Paper zDepth={3} style={bothStyles.paperRight}>
              <div className="overflow-content">
                <Paper zDepth={3} style={style}>
                  <div key={signatureMeals.id}>
                    {/* <Link to={`/meals/Details/${signatureMeals.id}`}> */}
                    <img
                      style={imageStyle}
                      alt="image_url"
                      src={signatureMeals.image_url}
                    />
                    {/* </Link> */}
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
        <div> {allMeals} </div>
      </div>
    );
  }
}
