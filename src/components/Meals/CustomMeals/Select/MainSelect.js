import React, { Component } from 'react';
// import './App.css';
// import router from './router';
import SelectOne from './SelectOne';
import { connect } from 'react-redux';

class MainSelect extends Component {
  constructor() {
    super();

    // INITIAL STATE HERE:
    this.state = {
      ProteinSize: '3oz',
      Carb: 'Carb-Free',
      CarbSize: '1/2 Cup',
      Veggies: 'No Veggies',
      VeggieSize: '20z'
    };

    //BINDING METHODS:
    this.handleProteinSizeChange = this.handleProteinSizeChange.bind(this);
    this.handleCarbChange = this.handleCarbSizeChange.bind(this);
    this.handleCarbSizeChange = this.handleCarbSizeChange.bind(this);
    this.handleVeggiesChange = this.handleVeggiesChange.bind(this);
    this.handleVeggiesSizeChange = this.handleVeggiesSizeChange.bind(this);
  }

  //METHODS BELOW:
  handleProteinSizeChange(event) {
    this.setState({ ProteinSize: event.target.value });
  }
  handleCarbChange(event) {
    this.setState({ Carb: event.target.value });
  }
  handleCarbSizeChange(event) {
    this.setState({ CarbSize: event.target.value });
  }
  handleVeggiesChange(event) {
    this.setState({ Veggies: event.target.value });
  }
  handleVeggiesSizeChange(event) {
    this.setState({ VeggieSize: event.target.value });
  }

  render() {
    return (
      <div>
        <SelectOne />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps)(MainSelect);
