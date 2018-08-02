import React, { Component } from 'react';
import './SearchBar.css';
import FullMenu from '../Meals/FullMenu/FullMenu';
import axios from 'axios';
// import List from './List';
import { Icon, Input } from 'semantic-ui-react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    //BIND ALL ACTION CHANGE:
  }

  componentDidMount() {
    axios.get('/api/meals').then(response => {
      this.setState({ result: response.data });
    });
  }

  render() {
    return (
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
      />
    );
  }
}
