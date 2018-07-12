import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typing: ''
    };

    //BIND ALL ACTION CHANGE:
  }
  //EVENT HANDLER BELOW:

  // handleButtonChange() {
  //   this.setState({ typing: this.state.typing });
  // }
  render() {
    return (
      <div style={{ display: 'flex', marginRight: '6%', marginTop: '.5%' }}>
        <input
          placeholder="search..."
          value={this.state.typing}
          onChange={event => this.setState({ typing: event.target.value })}

          // console.log(event.target.value)
        >
          {/* The Value is: {this.state.typing} */}
        </input>
        Value:{this.state.typing}
        {/* <button onClick={() => this.handleButtonChange}>Search</button> */}
      </div>
    );
  }
}
