import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Quantity.css';
import Header from '../Header/Header';

import { Button } from 'semantic-ui-react';

class Quantity extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {
      clicks: 0,
      show: true,
      value: 0,
      qty: []
    };
  }
  //LIFE CYCLE METHOD HERE:
  //HANDLE ACTION EVENT HERE:
  IncrementItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks + 1,
      value: this.state.value + 1,
      qty: this.state.qty
    });
  };

  DecreaseItem = e => {
    e.preventDefault();
    this.setState({
      clicks: this.state.clicks - 1,
      value: this.state.value - 1,
      qty: this.state.qty
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log(this.state.value);

    return (
      <div>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 900,
            color: 'grey',
            textTransform: 'uppercase',
            marginLeft: '27%'
          }}
        >
          Quantity {this.props.qty}
        </h3>
        <div className="QContainer">
          <button
            style={{
              paddingLeft: '20px',
              paddingRight: '20px',
              fontSize: '20px',
              fontWeight: 900,
              color: 'grey',
              paddingTop: '14px',
              paddingBottom: '14px'
            }}
            onClick={this.DecreaseItem}
          >
            -
          </button>
          <button
            style={{
              paddingLeft: '40px',
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
        <Header cartNumber={Number(this.state.value) + this.state.qty} />
      </div>
    );
  }
}

export default Quantity;
