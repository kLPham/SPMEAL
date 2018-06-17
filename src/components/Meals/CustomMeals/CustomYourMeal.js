import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import { Button } from 'semantic-ui-react';

export default class CustomYourMeal extends Component {
  constructor(props) {
    super(props);

    this.state = { displayMeals: [] };
  }
  //COMPONENT LIFE CYCLE:

  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/proteins').then(response => {
      this.setState({ displayMeals: response.data });
      console.log('proteins data just went through', response);
    });
  }
  //Handle
  //   handleShopNowButton = () => {
  //     this.setState({ open: true });
  //     window.location.href = 'http://localhost:3000/Meals/CDetails';
  //   };

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

    const allMeals = this.state.displayMeals.map(proteins => {
      return (
        <div>
          <Paper zDepth={1} style={styles}>
            <div key={proteins.id}>
              <Link to={`/Meals/CDetails/${proteins.id}`}>
                <img
                  style={imageStyle}
                  alt="image_url"
                  src={proteins.image_url}
                />
              </Link>
              <div>
                {/* <p>{proteins.meals_name}</p> */}
                <p style={{ fontWeight: 900, color: 'gray', fontSize: '15px' }}>
                  ${proteins.price}
                </p>
                <Button basic color="red" onClick={this.handleShopNowButton}>
                  Select
                </Button>
              </div>
              <br />
            </div>
          </Paper>
        </div>
      );
    });

    return (
      <div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: '40px',
            marginTop: '2.5%',
            marginBottom: '2.5%'
          }}
        >
          Step 1: Choose Your Protein
        </h2>
        <div className="fbContent" style={{ paddingBottom: '2%' }}>
          {' '}
          <hr />
          {allMeals}
        </div>
      </div>
    );
  }
}
