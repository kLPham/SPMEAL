import React, { Component } from 'react';
import axios from 'axios';

export default class MealsDetails extends Component {
  constructor(props) {
    super(props);

    //SET INITIAL STATE HERE
    this.state = {
      meals: [],
      cart: []
    };

    //BIND ACTIONS HERE
  }
  //CREATE ACTION TYPE HERE

  //GET EACH MEAL WITH A MATCHING ID:
  componentDidMount() {
    axios
      .get(`/api/meals/${this.props.match.params.meals_id}`)
      .then(response => {
        this.setState({ meals: response.data });
        console.log(response.data);
      });
  }
  render() {
    const style = {
      position: 'relative',
      display: 'row',
      borderStyle: 'ridge',
      borderColor: 'gray',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '2%',
      paddingTop: '5%',
      paddingBottom: '3%'
    };
    const buttonStyle = {
      backgroundColor: 'red',
      color: 'white',
      height: '50px',
      width: '100%',
      marginTop: '2%',
      fontSize: '20px',
      textTransform: 'uppercase'
    };
    const rightItemsStyle = {
      float: 'right',
      position: 'absolute',
      top: '5%',
      right: '5%',
      fontSize: '30px'
    };
    const imageStyle = {
      marginLeft: '5%',
      height: '50%',
      width: '50%'
    };

    const displayMealDetails = this.state.meals.map(mealsId => {
      return (
        <div key={mealsId.meals_id} style={style}>
          <div style={imageStyle}>
            <img alt="image_url" src={mealsId.image_url} />
            <p>Description:{mealsId.description}</p>
          </div>
          <br />
          <div style={rightItemsStyle}>
            <p>{mealsId.meals_name}</p>
            <p>${mealsId.price}</p>
            <select>
              <option>
                QTY:
                {mealsId.quantity}
              </option>
            </select>
            <br />
            <hr />
            <button style={buttonStyle}>Add To Cart</button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div> {displayMealDetails}</div>
      </div>
    );
  }
}
