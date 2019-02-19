import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';

export default class RatingHeart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRating: 0
    };

    //BIND METHODS HERE
    this.handleNewRatings = this.handleNewRatings.bind(this);
  }
  // event handler here:
  handleNewRatings = (e, { newRating, rating, maxRating }) =>
    this.setState({ newRating: rating, maxRating });

  render() {
    const { newRating } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          marginLeft: '75%'
        }}
      >
        <Rating
          icon="star"
          size="massive"
          defaultRating={3}
          maxRating={5}
          onRate={this.handleNewRatings}
        />
        <p>Rating:{newRating}</p>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}
