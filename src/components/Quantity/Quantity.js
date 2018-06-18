import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Quantity.css';

import { Button } from 'semantic-ui-react';

class Quantity extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {
      clicks: 0,
      show: true
    };
  }
  //LIFE CYCLE METHOD HERE:
  //HANDLE ACTION EVENT HERE:
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 900,
            color: 'grey',
            textTransform: 'uppercase'
          }}
        >
          Quantity
        </h3>
        <div className="QContainer">
          {/* <button onClick={this.DecreaseItem}>-</button> */}
          <button
            style={{
              paddingLeft: '20px',
              paddingRight: '20px',
              fontSize: '20px',
              fontWeight: 900,
              color: 'grey',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
            onClick={this.DecreaseItem}
          >
            -
          </button>

          <button
            style={{
              paddingLeft: '30px',
              paddingRight: '30px',
              fontSize: '20px',
              fontWeight: 900,
              color: 'grey'
            }}
          >
            {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
          </button>
          <button
            style={{
              paddingLeft: '20px',
              paddingRight: '20px',
              fontSize: '20px',
              fontWeight: 900,
              color: 'grey'
            }}
            onClick={this.IncrementItem}
          >
            +
          </button>
        </div>
        {/* <button onClick={this.ToggleClick}>   
        </button> */}
        {/* {this.state.show ? 'Hide number' : 'Show number'} */}
        {/* {this.state.show ? <h2>{this.state.clicks}</h2> : ''} */}
      </div>
    );
  }
}
export default Quantity;
