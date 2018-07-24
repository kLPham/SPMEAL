import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react';

class Qty extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {
      clicks: 0,
      show: true,
      value: 0,
      qty: []
    };

    //BIND ACTIONS HERE
    this.IncrementItem = this.IncrementItem.bind(this);
    this.DecreaseItem = this.DecreaseItem.bind(this);
    this.ToggleClick = this.ToggleClick.bind(this);
  }
  //LIFE CYCLE METHOD HERE:
  //HANDLE ACTION EVENT HERE:
  IncrementItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks + 1,
      value: this.state.value + 1
      // qty: this.state.qty + 1
    });
  };

  DecreaseItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks - 1,
      value: this.state.value - 1
      // qty: this.state.qty - 1
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log(this.state.value);

    return (
      <div>
        <div
          style={{
            color: 'grey'
          }}
          className="QContainer"
        >
          Qty:
          <button
            style={{
              fontWeight: 900,
              color: 'grey',
              height: '40px'
            }}
            onClick={this.DecreaseItem}
          >
            -
          </button>
          <button
            style={{
              fontSize: '20px',
              fontWeight: 900,
              color: 'grey',
              height: '40px'
            }}
          >
            {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
          </button>
          <button
            style={{
              fontWeight: 900,
              color: 'grey',
              height: '40px'
            }}
            onClick={this.IncrementItem}
          >
            +
          </button>
        </div>
        {this.props.Q}
      </div>
    );
  }
}

export default Qty;
