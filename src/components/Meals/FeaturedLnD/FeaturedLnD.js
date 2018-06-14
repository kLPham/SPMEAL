import React, { Component } from 'react';
import './FeaturedLnD.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default class FeaturedLnD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMeals: []
    };
  }
  /// REQUEST FOR DATA OF TYPE OF MEALS HERE ///
  componentDidMount() {
    axios.get('/api/meals/Featuredlnd').then(response => {
      this.setState({ displayMeals: response.data });
      console.log(
        'featured Lunch & dinner meals data just went through',
        response
      );
    });
  }

  render() {
    const allMeals = this.state.displayMeals.map(featuredLnD => {
      const style = {
        // height: '15%',
        width: '20%',
        float: 'left',
        position: 'relative',
        textAlign: 'center',
        // marginRight: '1%',
        marginBottom: '2%',
        marginLeft: '5%'
      };
      const imageStyle = {
        height: '100%',
        width: '100%'
      };

      return (
        <div>
          <Paper zDepth={3} style={style}>
            <div>
              <Paper>
                <div key={featuredLnD.id}>
                  <div>
                    <Link to={`/Meals/Details/${featuredLnD.meals_id}`}>
                      <img
                        style={imageStyle}
                        alt="image_url"
                        src={featuredLnD.image_url}
                        // className="fbimg"
                      />
                      <p className="price">${featuredLnD.price}</p>
                    </Link>
                  </div>
                  <div>
                    <p>{featuredLnD.description}</p>
                  </div>
                </div>
              </Paper>
            </div>
          </Paper>
        </div>
      );
    });

    return (
      <div>
        <div className="fbContent">{allMeals} </div>
      </div>
    );
  }
}