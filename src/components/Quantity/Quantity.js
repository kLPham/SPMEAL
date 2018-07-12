import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './Quantity.css';

import { Button } from 'semantic-ui-react';

class Quantity extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE HERE:
    this.state = {
      clicks: 0,
      show: true,
      selectItem: []
    };
  }
  //LIFE CYCLE METHOD HERE:
  //HANDLE ACTION EVENT HERE:
  // SelectedItems(event) {
  //   this.setState({
  //     selectItem:
  //       this.props.ProteinSize +
  //       this.props.Carb +
  //       this.props.CarbSize +
  //       this.props.Veggies +
  //       this.props.VeggieSize,
  //     selectItem: event.target.value
  //   });
  // }
  // RemoveSelectedItems(event) {
  //   this.setState({
  //     selectItem:
  //       this.props.ProteinSize +
  //       this.state.clicks -
  //       1 +
  //       this.props.Carb +
  //       this.state.clicks -
  //       1 +
  //       this.props.CarbSize +
  //       this.state.clicks -
  //       1 +
  //       this.props.Veggies +
  //       this.state.clicks -
  //       1 +
  //       this.props.VeggieSize +
  //       this.state.clicks -
  //       1
  //   });
  // }
  IncrementItem = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };
  DecreaseItem = () => {
    this.setState({
      clicks: this.state.clicks - 1
    });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    // const selectedItem =
    //   this.props.ProteinSize +
    //   this.props.Carb +
    //   this.props.CarbSize +
    //   this.props.Veggies +
    //   this.props.VeggieSize;
    // console.log(this.SelectedItems);
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
              paddingTop: '14px',
              paddingBottom: '14px'
            }}
            onClick={this.DecreaseItem}
            // onChange={this.RemoveSelectedItems}
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
            // onSelect={{ selectedItem }}
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

// export default Quantity;

function mapStateToProps(state) {
  const { ProteinSize, Carb, CarbSize, Veggies, VeggieSize } = state;

  return {
    ProteinSize,
    Carb,
    CarbSize,
    Veggies,
    VeggieSize
  };
}

export default connect(mapStateToProps)(Quantity);
