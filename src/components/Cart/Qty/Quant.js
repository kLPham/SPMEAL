import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react';

class Quant extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {
      qty: []
    };

    //BIND ACTIONS HERE
  }
  //LIFE CYCLE METHOD HERE:
  //HANDLE ACTION EVENT HERE:

  render() {
    return (
      <div>
        <p>Qty:{this.props.value} </p>
      </div>
    );
  }
}

export default Quant;
