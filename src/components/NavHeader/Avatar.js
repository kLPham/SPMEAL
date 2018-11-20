import React, { Component } from 'react';
import axios from 'axios';
// import List from './List';
import { Icon } from 'semantic-ui-react';

export default class Avatar extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {};

    //BIND ALL ACTION CHANGE:
  }

  render() {
    return (
      <div>
        <Icon name="user circle" size="big" bordered color="red" />
      </div>
    );
  }
}
