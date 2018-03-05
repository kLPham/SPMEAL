import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      searchItem: ''
    };

    //BIND ALL ACTION CHANGE:
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handButtonChange = this.handleButtonChange.bind(this);
  }
  handleInputChange(searchInput) {
    this.setState({ searchInput });
  }
  handleButtonChange(searchItem) {
    window.location.href = 'http://localhost:3000/Shop';
  }

  render() {
    return (
      <div className="search">
        Search
        <input
          onChange={this.handleInputChange}
          placeholder="Search meals"
          type="text"
        />
        <button onClick={this.handleButtonChange}>Submit</button>
      </div>
    );
  }
}
