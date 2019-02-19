import React, { Component } from 'react';
import axios from 'axios';
// import { Button } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doughnutData: props.myDonutData
    };

    //BIND METHODS HERE
  }
  // event handler here:

  render() {
    return (
      <div>
        <Doughnut
          ref="chart"
          data={this.state.doughnutData}
          width={80}
          height={40}
          options={{
            title: {
              display: true,
              text: 'All Nutrition Facts',
              fontSize: 30
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}
